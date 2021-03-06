import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FooterComponent } from './footer/footer.component';
import {ScheduleComponent} from './schedule/schedule.component';

import { RegisterDialogComponent } from './register-dialog/register-dialog.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { EditUserDialogComponent } from './edit-user-dialog/edit-user-dialog.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {
    ScheduleModule,
    AgendaService,
    DayService,
    MonthAgendaService,
    MonthService,
    TimelineMonthService,
    TimelineViewsService,
    WeekService,
    WorkWeekService,
    YearService,
    DragAndDropService
} from '@syncfusion/ej2-angular-schedule';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DevelopmentPageComponent } from './development-page/development-page.component';
import { EventService } from "src/service/event-api.service";
import { EventData, EventDataManager } from "src/models/event-data";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        CalendarComponent,
        RegisterDialogComponent,
        LoginDialogComponent,
        EditUserDialogComponent,
        FooterComponent,
        ScheduleComponent,
        PageNotFoundComponent,
        DevelopmentPageComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        RouterModule.forRoot([
            {path: '', redirectTo: '/home', pathMatch: 'full'},
            {path: 'home', component: HomeComponent},
            {path: 'calendar', component: CalendarComponent},
            {path: 'development', component: DevelopmentPageComponent},
            {path: '**', component: PageNotFoundComponent}
        ]),
        MatToolbarModule,
        MatIconModule,
        MatDialogModule,
        MatButtonModule,
        MatMenuModule,
        MatDialogModule,
        HttpClientModule,
        ScheduleModule,
        MatProgressSpinnerModule
    ],
    providers: [
        DayService,
        WeekService,
        WorkWeekService,
        MonthService,
        AgendaService,
        MonthAgendaService,
        TimelineViewsService,
        TimelineMonthService,
        YearService,
        DragAndDropService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
