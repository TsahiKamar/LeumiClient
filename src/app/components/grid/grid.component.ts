import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatTable } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { ShapeService } from 'src/app/services/shape.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

 
  shapes: Shape[] = [];
  
  displayedColumns: string[] = ['type','radius','xY1','xY2','xY3'];
  
  dataSource: Shape[];
  
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
  
   constructor(private router: Router,private route: ActivatedRoute,private shapeService: ShapeService) { }

  ngOnInit() {
     //TEMP  
//  this.shapeService.getShapes().subscribe(result => {
//    this.shapes = [...result]; 
//    this.dataSource = this.shapes;
//   },
//  error => {
//      alert("getShapes error : " + JSON.stringify(error));
//  },
//  () => {
//      // 'onCompleted' callback.
//      // No errors
//  }
//  );
   
    this.dataSource = this.shapes;
 
  }

getShapes(type?:string) {
  
  this.dataSource = [];
  this.shapes = [];
  this.table.renderRows();

  this.shapeService.getShapes(type).subscribe(result => {
    this.shapes = [...result]; 
    this.dataSource = this.shapes;
   },
  error => {
      alert("getShapes error : " + JSON.stringify(error));
  },
  () => {
      // 'onCompleted' callback.
      // No errors
  }
  );

}


isAliveCheck()
{

}

  // onRowClicked(row) {
  //    //this.router.navigate(['/employeeDetails'], { queryParams: { id: row.id, fullName:row.fullName ,phone: row.phone,email: row.email,salary: row.salary}});
  // }

  
  
  
  // public GetControlValue(form: FormGroup, field: string){
  //   let el = document.querySelector('input[name="'+field+'"]');
  //   return form.get(field).value;
  // }

}
