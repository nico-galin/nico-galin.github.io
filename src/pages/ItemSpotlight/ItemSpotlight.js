import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './ItemSpotlight.module.scss';
import portfolio from '../../data/portfolio';
import Hexagon from '../../components/Hexagon/Hexagon';
import HexGrid from '../../components/HexGrid/HexGrid';
import { notBlank } from '../../utils';
import Button from '../../components/Button/Button';

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
    const [data, setData] = useState();
    useEffect(() => {
        const id = location.search.slice(1)
        setData(portfolio[id]);
    }, [location, data])

    const goBack = () => {
        navigate(-1, { replace: true });
        if (data != null && data.type === "project") navigate(-1, { replace: true });
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                { data &&
                    <>
                        <div className={styles.leftColumn}>
                            <div className={styles.backBtn} onClick={goBack}>
                                <div>Back</div>
                            </div>
                            <div className={styles.summary}>
                                <div className={styles.titles}>
                                    <p className={styles.subtitle}>{data.subtitle}</p>
                                    <p className={styles.title}>{data.title}</p>
                                </div>
                                <p className={styles.description}>{data.description}</p>
                                {notBlank(data.externalUrl) && notBlank(data.externalSiteName) &&
                                    <Button href={data.externalUrl} label={`View on ${data.externalSiteName}`} />
                                }
                                </div>
                        </div>
                        <div className={styles.middleColumn}>
                            <div className={styles.hexWrapper}>
                                <div className={styles.hexWrapper2}>
                                <Hexagon size={520} imgUrl={data.imageUrl} color={data.type === "project" ? "colored" : "dark"} nohover large/>
                                </div>
                            </div>
                            {data.type === "icon" ?
                                <div className={styles.hexagonTailIcon}>
                                    <HexGrid size={80} length={3} width={3} data={itemTailGrid} nohover/>
                                </div>
                            : 
                                <div className={styles.hexagonTailProj}>
                                    <HexGrid size={80} length={2} width={4} data={projectTailGrid} nohover/>
                                </div>
                            }
                        </div>
                        {data.type === "project" &&
                            <div className={styles.rightColumn} style={data.type === "icon" ? {display: "none"} : {display: "block"}}>
                                <table>
                                {Object.keys(data.categories).map((cat) => (
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
                                ))}
                                </table>
                            </div>
                        }
                    </>
                }
            </div>
        </div>
    );
  }
  
export default ItemSpotlight;
  