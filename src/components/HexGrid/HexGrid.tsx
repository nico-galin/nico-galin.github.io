import styles from "./HexGrid.module.scss";
import React from "react";
import Hexagon from "../Hexagon/Hexagon";
import mathUtils from "../../utils/math";
import validations from "../../utils/validations";
import portfolio from "../../constants/portfolio";
import type { Hexagon as HexagonType } from "../../models/Hexagon";

interface HexGrid_Props {
  size: number;
  length: number;
  width: number;
  resize?: boolean;
  start?: [number, number];
  onClick?: (val: string) => void;
  delayFraction?: number;
  horizontalOffset?: number;
  data: HexagonType[];
  nohover?: boolean;
}

const HexGrid = ({
  size,
  length,
  width,
  resize = false,
  start = [0, 0],
  onClick = () => null,
  delayFraction = 3,
  horizontalOffset = 0,
  data,
}: HexGrid_Props) => {
  const yTrans = (-1 * size) / 6;
  const xTrans = size / 2;
  return (
    <div
      className={styles.container}
      style={resize ? {} : { width: "max-content" }}
    >
      {[...Array(length)].map((_, rowInd) => (
        <div
          className={styles.row}
          style={
            rowInd % 2 === 0
              ? { transform: `translateY(${rowInd * yTrans}px)` }
              : { transform: `translate(${xTrans}px, ${rowInd * yTrans}px)` }
          }
          key={rowInd}
        >
          {data
            .slice(rowInd * width, rowInd * width + width)
            .map((hex: HexagonType, hexInd: number) => (
              <Hexagon
                style={{ marginLeft: `-${horizontalOffset}px` }}
                onClick={() => onClick(hex[0])}
                key={hexInd}
                imgUrl={hex[1]}
                color={hex[2]}
                inlineData={
                  hex[0].split("_")[hex[0].split("_").length - 1] ===
                    "project" && portfolio[hex[0]] != null
                    ? {
                        header: portfolio[hex[0]]?.title,
                        description: validations.isNotBlank(
                          portfolio[hex[0]]?.description_short
                        )
                          ? portfolio[hex[0]]?.description_short
                          : portfolio[hex[0]]?.description,
                        footer: portfolio[hex[0]]?.timestamp,
                      }
                    : null
                }
                size={size}
                nohover={!validations.isNotBlank(hex[0])}
                animationDelay={
                  mathUtils.euclideanDist([hexInd, rowInd], start) /
                  delayFraction
                }
              />
            ))}
        </div>
      ))}
    </div>
  );
};

export default HexGrid;
