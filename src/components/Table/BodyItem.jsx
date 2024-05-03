import { useState, useRef } from "react";

import styles from "./styles.module.scss";
import cn from "classnames";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import Checkbox from "../Checkbox/Checkbox";
import docIcon from "../../assets/mark.svg";

const checkboxProp = "check";

const BodyItem = ({
   row,
   columns,
   index,
   tableFor,
   maxWordsLength = 20,
   setTableData,
}) => {
   const [checkbox, setCheckbox] = useState(false);
   const [isHover, setIsHover] = useState(false);

   const changeHiddenProp = () => {
      setTableData((prevData) =>
         prevData.map((item) => {
            if (item.id === row.id) {
               return { ...item, hide: !row.hide };
            }
            return item;
         })
      );
   };

   console.log(row);

   return (
      <tr
         key={`row-${index}`}
         className={cn(
            index % 2 === 0 ? styles.rowOdd : "",
            row?.hide ? styles.hidden : ""
         )}
      >
         {columns?.map((column, columnIndex) => (
            <td key={`cell-${index}-${columnIndex}`}>
               {row?.[column?.name] === checkboxProp && !row?.hide && (
                  <div className={styles.checkbox_wraapper}>
                     {!row?.optional && (
                        <img className={styles.req_img} src={docIcon} alt="" />
                     )}
                     <Checkbox
                        value={checkbox}
                        onChange={({ target }) => setCheckbox(!checkbox)}
                        disabled={row?.[column?.required]}
                     />
                  </div>
               )}

               {row?.[column?.name] !== checkboxProp && (
                  <div className={styles.cellContent}>
                     <div>{row?.[column?.name]}</div>
                  </div>
               )}

               {row?.optional && row?.[column?.name] !== checkboxProp && (
                  <div className={styles.optional_cehckbox_wrapper}>
                     <Checkbox
                     label={row.hide ? "Виключено" : "Включено"}
                        value={row.hide}
                        defaultValue={row.optional}
                        onChange={changeHiddenProp}
                     />
                  </div>
               )}
            </td>
         ))}
      </tr>
   );
};

export default BodyItem;
