import { ComponentFixture, TestBed } from '@angular/core/testing'

import { GroupedchartComponent } from './groupedchart.component'

describe('GroupedchartComponent', () => {
  let component: GroupedchartComponent
  let fixture: ComponentFixture<GroupedchartComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroupedchartComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupedchartComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
