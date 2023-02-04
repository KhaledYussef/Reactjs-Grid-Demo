/* eslint-disable default-case */
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Inject,
  Reorder,
  Resize,
  Toolbar,
  ColumnChooser,
  Sort,
  Filter,
  ExcelExport,
  PdfExport,
} from '@syncfusion/ej2-react-grids';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import './App.css';



function App() {
  // const toolbarOptions = ['ColumnChooser'];
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyVHlwZSI6IkN1c3RvbWVyIiwiUmVmZXJlbmNlSWQiOiIxIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbW9iaWxlcGhvbmUiOiJwaG9uZU51bWJlciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6InRoZXNoYWRvdy5raGFsZWRAZ21haWwuY29tIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6IkFkbWluIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiI3NWJiOGU4YS0yZWI0LTQwMjAtYTkyNy1lOGM3YjllY2Q1MDkiLCJleHAiOjE2Nzc2OTgwMzksImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzkyLyIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzkyLyJ9.qegm0VZltZpSb0IoiTdkiHjCz9-dG4SgebzD4CbsWwo';
  var data2 = new DataManager({
    adaptor: new UrlAdaptor(),
    url: 'https://localhost:7092/Company',
    crossDomain: true,
    headers: [{ 'Authorization': `Bearer ${token}` }],
  })
  let gridInstance;
  // const sortingOptions = { columns: [{ field: 'id', direction: 'Descending' }] };
  function toolbarClick(args) {
    console.log(args.item.text)
    switch (args.item.text) {
      case 'PDF Export':
        gridInstance.pdfExport();
        break;
      case 'Excel Export':
        gridInstance.excelExport();
        break;
    }
  }
  const toolbarOptions = ['ExcelExport', 'PdfExport', 'ColumnChooser'];
  return (<div className='control-pane'>
    <div className='control-section'>
      <h1 className='text-center'>Grid Demo</h1>
      <GridComponent
        id="Grid"
        toolbarClick={toolbarClick.bind(this)}
        ref={grid => gridInstance = grid}
        dataSource={data2}
        allowFiltering={true}
        allowSorting={true}
        allowPaging={true}
        allowResizing={true}
        allowReordering={true}
        showColumnChooser={true}
        allowPdfExport={true}
        allowExcelExport={true}
        // enableRtl={true}
        toolbar={toolbarOptions}
        // sortSettings={sortingOptions}
        pageSettings={{ pageCount: 10, pageSize: 10, pageSizes: [10, 20, 50, 100] }}>
        <ColumnsDirective>
          <ColumnDirective field='id' width='120' textAlign='Right'></ColumnDirective>
          <ColumnDirective field='phone' width='160'></ColumnDirective>
          <ColumnDirective field='shopTypeName' width='160'></ColumnDirective>
          <ColumnDirective field='cityName' width='160'></ColumnDirective>
          <ColumnDirective field='countryName' width='160'></ColumnDirective>
          <ColumnDirective field='workDays' width='160'></ColumnDirective>

        </ColumnsDirective>
        <Inject services={[Page, Reorder, Resize, Toolbar, ColumnChooser, Sort, Filter, ExcelExport, PdfExport]} />
      </GridComponent>
    </div>
    <div id='waitingpopup' className='waitingpopup'>
      <span id='gif' className='image'></span>
    </div>
  </div>);

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
