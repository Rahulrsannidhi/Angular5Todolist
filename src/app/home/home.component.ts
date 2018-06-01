import { DataService } from './../data.service';
import { Component, OnInit, Optional } from '@angular/core';
import{ trigger,style,transition,animate,keyframes,query,stagger} from '@angular/animations'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations:[
    trigger('carrierGoalArray',[
     transition('* => *',[
       query(':enter', style( { opacity:0}),{optional: true}),

       query(':enter', stagger('300ms',[
         animate('.6s ease-in',keyframes([
           style({opacity:0, transform:'translateY(-75%)',offset:0}),
           style({opacity:.5, transform:'translateY(-35px%)',offset:.3}),
           style({opacity:1, transform:'translateY(0)',offset:1}),
         ]))]),{optional:true}),
         query(':leave', stagger('300ms',[
          animate('.6s ease-in',keyframes([
            style({opacity:1, transform:'translateY(0%)',offset:0}),
            style({opacity:.5, transform:'translateY(35px%)',offset:.3}),
            style({opacity:0, transform:'translateY(-75%)',offset:1}),
          ]))]),{optional:true})
     ])
       
    ])
  ]
})
export class HomeComponent implements OnInit {
  itemCount:number;
  btnText:String = 'Add an item';
  carrierText:String = 'My initial Goal';
  carrierGoalArray = [];
  constructor(private _data: DataService) {
  
   }
  ngOnInit() {
    this._data.carGoal.subscribe(res =>this.carrierGoalArray =res);
    this.itemCount = this.carrierGoalArray.length;
    this._data.changeCarGoal(this.carrierGoalArray);
  }
  addItem(){
    if(this.carrierText.length>0){
    this.carrierGoalArray.push(this.carrierText);
    this.carrierText = '';
    this.itemCount =this.carrierGoalArray.length;
    this._data.changeCarGoal(this.carrierGoalArray);

  }
  }
  removeItem(i){
    this.carrierGoalArray.splice(i,1)
    this.itemCount =this.carrierGoalArray.length;
    this._data.changeCarGoal(this.carrierGoalArray);
  }
}
