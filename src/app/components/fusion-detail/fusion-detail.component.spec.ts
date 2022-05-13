import { ComponentFixture, TestBed } from "@angular/core/testing"

import { FusionDetailComponent } from "./fusion-detail.component"

describe("FusionDetailComponent", () => {
  let component: FusionDetailComponent
  let fixture: ComponentFixture<FusionDetailComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FusionDetailComponent]
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(FusionDetailComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
