import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShapeService } from 'src/app/services/shape.service';

@Component({
  selector: 'app-paint',
  templateUrl: './paint.component.html',
  styleUrls: ['./paint.component.css']
})
export class PaintComponent implements OnInit {

  shape: Shape ;

  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;  
  
  private ctx: CanvasRenderingContext2D;

  constructor(private router: Router,private route: ActivatedRoute,private shapeService: ShapeService) { }

  ngOnInit(): void {
     this.ctx = this.canvas.nativeElement.getContext('2d');
     
     //this.drawRectangle(20, 20, 150, 100);

     //this.drawTriangle (75, 50,100, 75,100, 25);

     //this.drawCircle(100,75,50);

 
  }


  draw1(x: number, y: number, z: number) {
    this.ctx.fillRect(z * x, z * y, z, z);
  }

drawRectangle (x:number,y:number,width:number,height:number)
{
  this.ctx.beginPath();
  this.ctx.rect(20, 20, 150, 100);
  this.ctx.stroke();
}

drawCircle (x:number,y:number,radius:number)
{

  this.ctx.beginPath();
  this.ctx.arc(x, y, radius, 0, 2 * Math.PI); //100, 75, 50
  this.ctx.stroke();
}

drawTriangle (x1:number,y1:number,x2:number,y2:number,x3:number,y3:number)
{
 
    this.ctx.beginPath();
    this.ctx.moveTo(x1, y1);//75, 50
    this.ctx.lineTo(x2, y2);//(100, 75)
    this.ctx.lineTo(x3, y3);//(100, 25)
    this.ctx.fill();

}


  onMouseClick() {
   this.getShape();
  }


  draw(type:string,shape:any) {
  
    switch(type){
    case "Circle":
      this.drawCircle(shape.xY1.x,shape.xY1.y,shape.radius);

      break;
    case "Rectangle":
      this.drawRectangle(shape.xY1.x,shape.xY1.y,shape.xY2.x,shape.xY2.y);//tbc

      this.draw1(shape.xY1.x,shape.xY1.y,shape.xY1.z) ;
  

      break;
    case "Triangle":
 
      this.drawTriangle(shape.xY1.x,shape.xY1.y,shape.xY2.x,shape.xY2.y,shape.xY3.x,shape.xY3.y);

      break;
  }
  
  }


  async getShape(){

    //tr
  //var result = await this.shapeService.getLastShape(); 
  //var json = JSON.stringify(result);
  //alert(json);
  //let shape = <Shape>JSON.parse(json); 
  //this.draw(shape.type,shape);


   await this.shapeService.getLastShape().subscribe(result => {
     var json = JSON.stringify(result);
     alert(json);
     let shape = <Shape>JSON.parse(json); 
    
     this.draw(shape.type,shape);
   },
   error => {
       alert("getShape error : " + JSON.stringify(error));
   },
   () => {
       // 'onCompleted' callback.
       // No errors
   }
   );

}


}
