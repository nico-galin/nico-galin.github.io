import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './ItemSpotlight.module.scss';
import portfolio from '../../data/portfolio';
import Hexagon from '../../components/Hexagon/Hexagon';
import HexGrid from '../../components/HexGrid/HexGrid';

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
        navigate(`/portfolio`);
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
                                <a href={data.externalUrl} target="_blank" className={styles.externalBtn} rel="noreferrer">View on {data.externalSiteName}</a>
                            </div>
                        </div>
                        <div className={styles.middleColumn}>
                            <div className={styles.hexWrapper}>
                                <div className={styles.hexWrapper2}>
                                <Hexagon size={520} imgUrl={data.imageUrl} color={data.type === "project" ? "colored" : "dark"} nohover/>
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
                                {Object.keys(data.categories).map((cat) => (
                                    <div className={styles.category}>
                                        <div>
                                            {cat}
                                        </div>
                                        <div>
                                            {data.categories[cat].map((item) => (
                                                <p>{item}</p>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        }
                    </>
                }
            </div>
        </div>
    );
  }
  
export default ItemSpotlight;
  