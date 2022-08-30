import { useData, TableLayoutUi } from "../"

/* options //////
  keyLabels: [key]: label pairs *required
  dataUrl: 'http://...' string *required
  tableId:  unique identifier used for css classes, assigns a default if none,
  TODO gridLayout: true || false  selects style of table, either table based or grid based.
*/

const Loading = () => <div>Loading</div>

const Loaded = ({ classId, gridLayout, ...rest }) => {
  // add table id modifier to wrapping class
  let cssClass = classId ? `data-table data-table--${classId}` : `data-table`

  return <TableLayoutUi  {...{ cssClass, ...rest }} /> // table layout is the only working layout
}

export const DataTable = ({ keyLabels, dataUrl, tableId, gridLayout }) => {
  let classId = tableId || ('demo-table')
  // gets data/state from hook.  returns objects x.loading || x.error or if data is present, returns array
  const [tableData, handle] = useData(dataUrl, true)

  return (
    tableData.loading
      ? <Loading /> // dont show table if still loading.  This returns the loading screen
      : <Loaded {...{ keyLabels, tableData, classId, gridLayout, handle }} /> // return the rendered DataTable
  )
}