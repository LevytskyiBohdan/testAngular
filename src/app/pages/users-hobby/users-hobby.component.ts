import { Component, OnInit, SimpleChanges } from '@angular/core';
import { MenuItem } from 'primeng/api';
import * as Highcharts from 'highcharts';
import { UserService } from 'src/app/shared/services/user.service';
import { IUser } from 'src/app/shared/interfaces/iuser';
import { ListOfHobbyService } from 'src/app/shared/services/list-of-hobby.service';
import { forkJoin } from 'rxjs';

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
        name: 'first',
        y: 100,
        //@ts-ignore
        sliced: false,
        selected: true
      },]
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
    this.renderHighchart();
  }

  ngOnInit() { this.logIt(`onInit`); }

  ngOnDestroy() { this.logIt(`onDestroy`); }

  ngOnChanges() { this.logIt(`ngOnChanges`); }

  private logIt(msg: string) {
    console.log(msg)
  }


  private getUsers(): void {
    this.UserService.getUsers().subscribe(
      data => {
        this.users = data;
      },
      err => {
        console.log(err)
      }
    );
  }

  private getListOfHobby(): void {
    this.ListOfHobbyService.getListOfHobby().subscribe(data => {
      this.listOfHobby = data;
    })
  }

  private renderHighchart(): void {
    forkJoin(
      this.ListOfHobbyService.getListOfHobby(),
      this.UserService.getUsers()
    ).subscribe(([listOfHobby, users]) => {
      const usersHobby = {};
      let countOfHobby = 0;
      const percentageOfHobby = [];
      const arrayOfPercentage = [];


      listOfHobby.forEach(hobby => {
        Object.assign(usersHobby, { [hobby]: 0 });
      })

      users.forEach(user => {
        user.hobby.forEach(item => {
          countOfHobby += 1;
          usersHobby[item] += 1;
        })
      })

      listOfHobby.forEach(item => {
        percentageOfHobby.push({
          name: item,
          y: +((usersHobby[item] * 100 / countOfHobby).toFixed(2)),
        })
      })

      percentageOfHobby.forEach((item, idx) => {
        if (item.y === Math.max.apply(Math, percentageOfHobby.map(item => { return item.y; }))) {
          Object.assign(percentageOfHobby[idx].y, {
            sliced: false,
            selected: true,
           })
        }
      })
      
      this.chartOptions = Object.assign({}, this.chartOptions, {
        series: [{
          name: 'Brands',
          colorByPoint: true,
          data: [...percentageOfHobby,]
        }]
      }
      )
    })
  }

}
