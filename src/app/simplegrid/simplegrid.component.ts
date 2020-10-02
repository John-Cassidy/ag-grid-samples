import { HttpClient } from '@angular/common/http'
import { Component, OnInit, ViewChild } from '@angular/core'
import { AgGridAngular } from 'ag-grid-angular'

@Component({
  selector: 'app-simplegrid',
  templateUrl: './simplegrid.component.html',
  styles: [],
})
export class SimplegridComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridAngular
  title = 'ag-grid-samples'
  columnDefs = [
    { headerName: 'Make', field: 'make', rowGroup: true },
    { headerName: 'Price', field: 'price' },
  ]

  autoGroupColumnDef = {
    headerName: 'Model',
    field: 'model',
    cellRenderer: 'agGroupCellRenderer',
    cellRendererParams: {
      checkbox: true,
    },
  }
  rowData: any

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // this.rowData = this.http.get(
    //   'https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/sample-data/smallRowData.json'
    // );
    this.rowData = this.http.get(
      'https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/sample-data/rowData.json'
    )
  }

  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes()
    const selectedData = selectedNodes.map((node) => node.data)
    const selectedDataStringPresentation = selectedData
      .map((node) => node.make + ' ' + node.model)
      .join(', ')
    alert(`Selected nodes: ${selectedDataStringPresentation}`)
  }
}
