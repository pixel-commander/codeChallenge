import { DataTable } from './'
import './code_challenge_demo.css'

const dataUrl = 'https://reqres.in/api/users';

const tableHeaderLabels = {
  id: 'id',
  avatar: 'avatar',
  first_name: 'first name',
  last_name: 'last name',
  email: 'email'
}

/* options //////
  keyLabels: [key]: label pairs *required
  dataUrl: 'http://...' string *required
  tableId:  unique identifier used for css classes, assigns a default if none,
  TODO gridLayout: true || false  selects style of table, either table based or grid based.
*/

export const DataTableDemo = () =>
  <div className='demo'>
    <DataTable keyLabels={tableHeaderLabels} dataUrl={dataUrl} del='3' />
  </div>
