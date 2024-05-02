import { useState, useRef } from "react";

import styles from "./styles.module.scss";
import cn from "classnames";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";

const BodyItem = ({ row, columns, index, tableFor, maxWordsLength = 20 }) => {
   return (
      <tr
         key={`row-${index}`}
         className={cn(index % 2 === 0 ? styles.rowOdd : "")}
      >
         {columns?.map((column, columnIndex) => (
            <td key={`cell-${index}-${columnIndex}`}>
               {row?.[column?.name] === "-" && (
                  // <input className={styles.checkbox} type="checkbox" />
                  <Form.Check
                     type="checkbox"
                     id="checkbox"
                     aria-label="option 1"
                     className="customCheckbox"
                  />
               )}
               {row?.[column?.name] !== "-" && (
                  <div className={styles.cellContent}>
                     <div>{row?.[column?.name]}</div>
                  </div>
               )}
            </td>
         ))}
      </tr>
   );
};

export default BodyItem;
