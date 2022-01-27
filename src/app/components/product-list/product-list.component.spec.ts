import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing'
import { ProductListComponent } from './product-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MobileNumberPipe } from 'src/app/pipes/mobile-number.pipe';
import { AddTitlePipe } from 'src/app/pipes/add-title.pipe';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListComponent,MobileNumberPipe,AddTitlePipe ],
      imports :[HttpClientTestingModule,RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have authorName as Tufail', async(() => {
    expect(component.authorName).toEqual('Tufail');
  }));

  it('should have contact number as 918867205331', async(() => {
    expect(component.contactNumber).toEqual('918867205331');
  }));
});
