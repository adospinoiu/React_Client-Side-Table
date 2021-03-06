import logo from './logo.svg';
import './App.css';
import { BasicTable } from './components/BasicTable';
import { SortingTable } from './components/SortingTable';
import { FilteringTable } from './components/FilteringTable';
import { PaginationTable } from './components/PaginationTable';
import { RowSelection } from './components/RowSelection';
import { ColumnOrder } from './components/ColumnOrder';
import { ColumnHiding } from './components/ColumnHiding';
import { StickyTable } from './components/StickyTable';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      {/* <BasicTable /> */}

      {/* <SortingTable /> */}

      {/* <FilteringTable /> */}

      {/* <PaginationTable /> */}

      {/* <RowSelection /> */}

      {/* <ColumnOrder /> */}

      {/* <ColumnHiding /> */}

      <StickyTable />
    </div>
  );
}

export default App;
