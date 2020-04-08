import { Component, OnInit, SimpleChanges } from '@angular/core';
import { MenuItem } from 'primeng/api';
import * as Highcharts from 'highcharts';
import { UserService } from 'src/app/shared/services/user.service';
import { IUser } from 'src/app/shared/interfaces/iuser';
import { ListOfHobbyService } from 'src/app/shared/services/list-of-hobby.service';

@Component({
  selector: 'app-users-hobby',
  templateUrl: './users-hobby.component.html',
  styleUrls: ['./users-hobby.component.css'],
  providers: [UserService, ListOfHobbyService],
})
export class UsersHobbyComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts; // required
  chartConstructor: string = 'chart'; // optional string, defaults to 'chart'
  chartOptions: Highcharts.Options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
  },
  title: {
      text: 'Users Hobby'
  },
  tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  accessibility: {
      point: {
          //@ts-ignore
          valueSuffix: '%'
      }
  },
  plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          }
      }
  },
  series: [{
      name: 'Brands',
      colorByPoint: true,
      data: [{
          name: 'Chrome',
          y: 61.41,
          //@ts-ignore
          sliced: false,
          selected: true
      }, {
          name: 'Internet Explorer',
          y: 11.84
      }, {
          name: 'Firefox',
          y: 10.85
      }, {
          name: 'Edge',
          y: 4.67
      }, {
          name: 'Safari',
          y: 4.18
      }, {
          name: 'Sogou Explorer',
          y: 1.64
      }, {
          name: 'Opera',
          y: 1.6
      }, {
          name: 'QQ',
          y: 1.2
      }, {
          name: 'Other',
          y: 2.61
      }]
  }]
  }; // required
  chartCallback: Highcharts.ChartCallbackFunction = function (chart) { } // optional function, defaults to null
  updateFlag: boolean = false; // optional boolean
  oneToOneFlag: boolean = true; // optional boolean, defaults to false
  runOutsideAngular: boolean = false; // optional boolean, defaults to false

  users: Array<IUser> = [];
  listOfHobby: Array<string> = [];

  constructor(
    private UserService: UserService,
    private ListOfHobbyService: ListOfHobbyService,
    ) {
    this.getUsers();
    this.getListOfHobby();
  }

  ngOnInit()    { this.logIt(`onInit`); }

  ngOnDestroy() { this.logIt(`onDestroy`); }

  ngOnChanges() { this.logIt(`ngOnChanges`); }

  private logIt(msg: string) {
    console.log(msg)
  }


  private getUsers(): void {
    this.UserService.getUsers().subscribe(
      data => {
        data.json().then(data => {
          console.log(data)
          this.users = data;
        })
      },
      err => {
        console.log(err)
      }
    );
  }

  private getListOfHobby(): void {
    this.ListOfHobbyService.getListOfHobby().subscribe(data => {
      data.json().then(res => {
        console.log(res)
        this.listOfHobby = res;
      })
    })
  }

  private renderHighchart(): void {
    
  }

}
