import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './ItemSpotlight.module.scss';
import portfolio from '../../data/portfolio';
import Hexagon from '../../components/Hexagon/Hexagon';
import HexGrid from '../../components/HexGrid/HexGrid';
import { notBlank } from '../../utils';
import Button from '../../components/Button/Button';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const itemTailGrid = [
    ["null","", "light"],
    ["null","", "colored"],
    ["null","", "invisible"],
    ["null","", "light"],
    ["null","", "colored"],
    ["null","", "colored"],
    ["null","", "light"],
    ["null","", "invisible"],
    ["null","", "invisible"],
]

const projectTailGrid = [
    ["null","", "invisible"],
    ["null","", "colored"],
    ["null","", "colored"],
    ["null","", "invisible"],
    ["null","", "dark"],
    ["null","", "dark"],
    ["null","", "colored"],
    ["null","", "colored"],
]

const ItemSpotlight = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { width } = useWindowDimensions();
    const [data, setData] = useState();
    useEffect(() => {
        const id = location.search.slice(1)
        setData(portfolio[id]);
    }, [location, data])

    const goBack = () => {
        navigate(-1, { replace: true });
        if (data != null && data.type === "project") navigate(-1, { replace: true });
    }

    const detailedInfo = useMemo(() =>  notBlank(data) && data.type === "project" && (
        <div className={styles.rightColumn} style={data.type === "icon" ? {display: "none"} : {display: "block"}}>
            {Object.keys(data.categories).map((cat, ind) => width > 850 ? (
                <table key={ind}>
                    <tr className={styles.category}>
                        <td>
                            <p>{cat}</p>
                        </td>
                        <td>
                            {data.categories[cat].map((item) => (
                                <p>{item}</p>
                            ))}
                        </td>
                    </tr>
                </table>
            ) : (
                <div key={ind} className={styles.category}>
                    <p>{cat}</p>
                    <div>
                        {data.categories[cat].map((item) => (
                            <p>{item}</p>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    ), [data])

    const itemInfo = useMemo(() =>  notBlank(data) && (
        <div className={styles.summary}>
            <div className={styles.titles}>
                <p className={styles.subtitle}>{data.subtitle}</p>
                <p className={styles.title}>{data.title}</p>
            </div>
            <p className={styles.description}>{data.description}</p>
            {data.type === "project" && width <= 850 && detailedInfo}
            {notBlank(data.externalUrl) && notBlank(data.externalSiteName) &&
                <div className={styles.externalBtn}>
                    <Button href={data.externalUrl} label={`View on ${data.externalSiteName}`} />
                </div>
            }
        </div>
    ), [data])

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                { notBlank(data) &&
                    <>
                        <div className={styles.leftColumn}>
                            <div className={styles.backBtn} onClick={goBack}>
                                <div>Back</div>
                            </div>
                            {width > 850 ? itemInfo : null}
                        </div>
                        <div className={styles.middleColumn}>
                            <div className={styles.hexWrapper}>
                                <div className={styles.hexWrapper2}>
                                    <Hexagon size={width > 850 ? 520 : 250} imgUrl={data.imageUrl} color={data.type === "project" ? "colored" : "dark"} nohover large/>
                                </div>
                            </div>
                            {data.type === "icon" ?
                                <div className={styles.hexagonTailIcon}>
                                    <HexGrid size={width > 850 ? 80 : 40} length={3} width={3} data={itemTailGrid} nohover/>
                                </div>
                            : 
                                <div className={styles.hexagonTailProj}>
                                    <HexGrid size={width > 850 ? 80 : 40} length={2} width={4} data={projectTailGrid} nohover/>
                                </div>
                            }
                        </div>
                        {width <= 850 ? itemInfo : null}
                        {data.type === "project" && width > 850 && detailedInfo}
                    </>
                }
            </div>
        </div>
    );
  }
  
export default ItemSpotlight;
  