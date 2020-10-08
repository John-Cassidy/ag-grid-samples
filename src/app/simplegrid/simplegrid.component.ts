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
  columnDefs: any

  rowData: any

  style = {
    width: '100%',
    // height: '100%',
    flex: '1 1 auto',
  }

  constructor(private http: HttpClient) {
    this.columnDefs = [
      { field: 'athlete', width: 150 },
      { field: 'age', width: 90 },
      { field: 'country', width: 150 },
      { field: 'year', width: 90 },
      { field: 'date', width: 150 },
      { field: 'sport', width: 150 },
      { field: 'gold', width: 100 },
      { field: 'silver', width: 100 },
      { field: 'bronze', width: 100 },
      { field: 'total', width: 100 },
    ]
  }

  ngOnInit(): void {
    // this.rowData = this.http.get(
    //   'https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/sample-data/smallRowData.json'
    // );
    // this.rowData = this.http.get(
    //   'https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/sample-data/rowData.json'
    // )

    this.http
      .get(
        'https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinnersSmall.json'
      )
      .subscribe((data) => {
        this.rowData = data
      })
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
