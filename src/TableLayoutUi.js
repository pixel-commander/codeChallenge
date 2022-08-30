import { useState } from "react"
import { DataTableHeader, DataTableRow, DataTableFormDemo } from "../"
import './tableLayoutUi.css'


const TableCells = ({ tableData, ...rest }) => Object.entries(tableData).map(([idKey, item]) =>
  <DataTableRow key={`row${item.id}`} count={idKey} {...{ ...rest, ...item }} />
)

export const TableLayoutUi = ({ keyLabels, tableData, cssClass, handle }) => {
  const [showForm, setShowForm] = useState(false)

  const handleDelete = user => {
    if (window.confirm(`Delete ${user.first_name} ${user.last_name}`)) handle('delete', user.id)
    else setShowForm(false)
  }

  const handleEdit = user => setShowForm(user)

  cssClass = showForm ? `${cssClass} hide-element` : cssClass

  return <>
    <table className={cssClass} cellPadding='0' cellSpacing='0'>
      <DataTableHeader {...{ keyLabels }} />
      <tbody>
        <TableCells {...{ tableData, handleDelete, handleEdit }} />
      </tbody>
    </table>
    {showForm && <DataTableFormDemo {...{ setShowForm, ...showForm }} />}
  </>
}
