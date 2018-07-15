import { Injectable } from '@angular/core';
import { Event } from '../../models/event';
import 'rxjs/add/operator/toPromise';
import { Subject } from 'rxjs/Subject';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class EventService {
  eventEdit = new Subject<number>();
  eventNew = new Subject<boolean>();
  eventsChanged = new Subject<boolean>();

  private savedEvents: Event[];

  private eventsUrl = '/api/events';

  constructor(private http: HttpClient) {}

  getEvent(index: number) {
    if (this.savedEvents.length > 0) {
      return this.savedEvents[index];
    }
  }

  getEventList() {
    return this.savedEvents.slice();
  }

  // get("/api/events")
  getEvents(): Promise<void | Event[]> {
    return this.http
      .get(this.eventsUrl)
      .toPromise()
      .then(
        response => {
          return response as Event[];
        }
      )
      .catch(this.handleError);
  }

  // post("/api/events")
  createEvent(newevent: Event): Promise<void | Event> {
    return this.http
      .post(this.eventsUrl, newevent)
      .toPromise()
      .then(response => {
        this.savedEvents.push(response as Event);
        return response as Event;
      })
      .catch(this.handleError);
  }

  // get("/api/events/:id") endpoint not used by Angular app

  // delete("/api/events/:id")
  deleteEvent(deleventId: String): Promise<void | String> {
    return this.http
      .delete(this.eventsUrl + '/' + deleventId)
      .toPromise()
      .then(response => response as String)
      .catch(this.handleError);
  }

  // put("/api/events/:id")
  updateEvent(putevent: Event): Promise<void | Event> {
    const putUrl = this.eventsUrl + '/' + putevent._id;
    return this.http
      .put(putUrl, putevent)
      .toPromise()
      .then(response => response as Event)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    const errMsg = error.message
      ? error.message
      : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }
}
