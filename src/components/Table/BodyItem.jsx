import styles from "./styles.module.scss";
import cn from "classnames";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import Checkbox from "../Checkbox/Checkbox";
import docIcon from "../../assets/mark.svg";

const checkboxProp = "check";
const noNeedCheckboxText = "Не потрібно";

const BodyItem = ({
   row,
   columns,
   index,
   tableFor,
   maxWordsLength = 20,
   setTableData,
   tableData,
}) => {
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

   const handleCheckboxChange = (row, columnName) => {
      setTableData((prevData) =>
         prevData.map((item) => {
            if (item.id === row.id) {
               return {
                  ...item,
                  [columnName]: item[columnName] === "check" ? "not_check" : "check",
               };
            }
            return item;
         })
      );
   };

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
               {row?.[column?.name]?.includes(checkboxProp) && (
                  <div className={styles.checkbox_wraapper}>
                     {row?.[column?.required] && (
                        <img
                           className={styles.req_img}
                           src={docIcon}
                           alt="mark"
                        />
                     )}

                     <Checkbox
                        value={row?.[column.name] === "check" ? true : false}
                        onChange={() => handleCheckboxChange(row, column.name)}
                        disabled={row?.[column?.required]}
                     />
                  </div>
               )}

               {!row?.[column?.name]?.includes(checkboxProp) && (
                  <div className={styles.cellContent}>
                     <div>{row?.[column?.name]}</div>
                  </div>
               )}

               {row?.optional &&
                  !row?.[column?.name]?.includes(checkboxProp) &&
                  row?.[column?.name] !== noNeedCheckboxText && (
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
