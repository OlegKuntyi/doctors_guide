import styles from "./styles.module.scss";
import cn from "classnames";
import BodyItem from "./BodyItem";

const Table = ({
   columns,
   data,
   searchedValue,
   maxHeight,
   maxWordsLength = 19,
}) => {
   return (
      <div style={{ maxHeight }} className={styles.table_container}>
         <table className={cn(styles.table)}>
            <div className={styles.title}>Подача заяви</div>

            <thead className={styles.thead}>
               <tr>
                  {columns?.map((column, index) => (
                     <th
                        key={column?.name}
                        className={cn(styles.header, "noselect")}
                     >
                        <span>{column?.label?.replaceAll("_", " ")}</span>
                     </th>
                  ))}
               </tr>
            </thead>
            <tbody className={styles.tbody}>
               {data?.map((row, index) => (
                  <BodyItem
                     key={`row-${index}`}
                     row={row}
                     columns={columns}
                     index={index}
                     maxWordsLength={maxWordsLength}
                  />
               ))}
            </tbody>
         </table>
      </div>
   );
};

export default Table;
