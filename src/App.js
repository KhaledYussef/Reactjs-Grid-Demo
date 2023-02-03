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
import { DataManager, WebApiAdaptor, WebMethodAdaptor, UrlAdaptor } from '@syncfusion/ej2-data';
import './App.css';



function App() {
  // const toolbarOptions = ['ColumnChooser'];
  const data = new DataManager({ url: 'https://localhost:7092/Auth', adaptor: new WebApiAdaptor(), crossDomain: true });
  var data2 = new DataManager({
    adaptor: new UrlAdaptor(),
    url: 'https://localhost:7092/Auth', crossDomain: true
  })
  let gridInstance;
  const sortingOptions = { columns: [{ field: 'id', direction: 'Descending' }] };
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
        toolbar={toolbarOptions}
        sortSettings={sortingOptions}
        pageSettings={{ pageCount: 5, pageSize: 10 }}>
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
