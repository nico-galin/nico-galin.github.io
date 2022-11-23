import { useMemo } from "react";
import styles from "./Item.module.scss";
import portfolio from "../../constants/portfolio";
import Hexagon from "../../components/Hexagon/Hexagon";
import HexGrid from "../../components/HexGrid/HexGrid";
import validations from "../../utils/validations";
import Button from "../../components/Button/Button";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { useRouter } from "next/router";
import type Project from "../../models/Project";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import type { ParsedUrlQuery } from "querystring";
import type { Hexagon as HexagonType } from "../../models/Hexagon";
import Navigation from "../../components/Navigation";
import Head from "next/head";

const itemTailGrid = [
  ["null", "", "light"],
  ["null", "", "colored"],
  ["null", "", "invisible"],
  ["null", "", "light"],
  ["null", "", "colored"],
  ["null", "", "colored"],
  ["null", "", "light"],
  ["null", "", "invisible"],
  ["null", "", "invisible"],
];

const projectTailGrid = [
  ["null", "", "invisible"],
  ["null", "", "colored"],
  ["null", "", "colored"],
  ["null", "", "invisible"],
  ["null", "", "dark"],
  ["null", "", "dark"],
  ["null", "", "colored"],
  ["null", "", "colored"],
];

interface Item_Props {
  data: Project;
}

const Item: NextPage<Item_Props> = ({ data }) => {
  const router = useRouter();
  const { width } = useWindowDimensions();

  const goBack = () => {
    if (data != null && data.type === "project") {
      router.push("/portfolio/projects");
    } else {
      router.push("/portfolio/iconography");
    }
  };

  const detailedInfo = useMemo(
    () =>
      validations.isNotBlank(data) &&
      !!data &&
      data.type == "project" && (
        <div className={styles.rightColumn} style={{ display: "block" }}>
          {!!data.categories &&
            Object.keys(data.categories).map((cat: string, ind: number) =>
              !!width && width > 850 ? (
                <table key={ind}>
                  <tr className={styles.category}>
                    <td>
                      <p>{cat}</p>
                    </td>
                    <td>
                      {data.categories[cat]?.map(
                        (item: string, ind: number) => (
                          <p key={ind}>{item}</p>
                        )
                      )}
                    </td>
                  </tr>
                </table>
              ) : (
                <div key={ind} className={styles.category}>
                  <p>{cat}</p>
                  <div>
                    {data.categories[cat]?.map((item: string, ind: number) => (
                      <p key={ind}>{item}</p>
                    ))}
                  </div>
                </div>
              )
            )}
        </div>
      ),
    [data, width]
  );

  const itemInfo = useMemo(
    () =>
      !!data && (
        <div className={styles.summary}>
          <div className={styles.titles}>
            <p className={styles.subtitle}>{data.subtitle}</p>
            <p className={styles.title}>{data.title}</p>
          </div>
          <p className={styles.description}>{data.description}</p>
          {data.type === "project" && !!width && width <= 850 && detailedInfo}
          {validations.isNotBlank(data.externalUrl) &&
            validations.isNotBlank(data.externalSiteName) && (
              <div className={styles.externalBtn}>
                <Button
                  href={data.externalUrl}
                  label={`View on ${data.externalSiteName}`}
                />
              </div>
            )}
        </div>
      ),
    [data, width, detailedInfo]
  );

  return (
    <>
      <Head>
        <title>Nico Galin | {data.title}</title>
        <meta name="description" content={data.description} key="desc" />
      </Head>
      <Navigation />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          {!!data && (
            <>
              <div className={styles.leftColumn}>
                <div className={styles.backBtn} onClick={goBack}>
                  <div>Back</div>
                </div>
                {!!width && width > 850 ? itemInfo : null}
              </div>
              <div className={styles.middleColumn}>
                <div className={styles.hexWrapper}>
                  <div className={styles.hexWrapper2}>
                    <Hexagon
                      size={!!width && width > 850 ? 520 : 250}
                      imgUrl={data.imageUrl}
                      color={data.type === "project" ? "colored" : "dark"}
                      nohover
                      large
                    />
                  </div>
                </div>
                {data.type === "icon" ? (
                  <div className={styles.hexagonTailIcon}>
                    <HexGrid
                      size={!!width && width > 850 ? 80 : 40}
                      length={3}
                      width={3}
                      data={itemTailGrid as HexagonType[]}
                      nohover
                    />
                  </div>
                ) : (
                  <div className={styles.hexagonTailProj}>
                    <HexGrid
                      size={!!width && width > 850 ? 80 : 40}
                      length={2}
                      width={4}
                      data={projectTailGrid as HexagonType[]}
                      nohover
                    />
                  </div>
                )}
              </div>
              {!!width && width <= 850 ? itemInfo : null}
              {data.type === "project" &&
                !!width &&
                width > 850 &&
                detailedInfo}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: Object.keys(portfolio).map((itemId: string) => ({
      params: { itemId },
    })),
    fallback: false,
  };
};

interface QueryParams extends ParsedUrlQuery {
  itemId: string;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { itemId } = params as QueryParams;
  return { props: { data: portfolio[itemId] } };
};

export default Item;
