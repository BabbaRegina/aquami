import { Injectable } from '@angular/core';
import { Event } from '../models/event';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EventService {
    private eventsUrl = '/api/events';

    constructor (private http: Http) {}

    // get("/api/events")
    getEvents(): Promise<void | Event[]> {
      return this.http.get(this.eventsUrl)
                 .toPromise()
                 .then(response => response.json() as Event[])
                 .catch(this.handleError);
    }

    // post("/api/events")
    createEvent(newevent: Event): Promise<void | Event> {
      
      return this.http.post(this.eventsUrl, newevent)
                 .toPromise()
                 .then(response => response.json() as Event)
                 .catch(this.handleError);
    }

    // get("/api/events/:id") endpoint not used by Angular app

    // delete("/api/events/:id")
    deleteEvent(deleventId: String): Promise<void | String> {
      return this.http.delete(this.eventsUrl + '/' + deleventId)
                 .toPromise()
                 .then(response => response.json() as String)
                 .catch(this.handleError);
    }

    // put("/api/events/:id")
    updateEvent(putevent: Event): Promise<void | Event> {
      var putUrl = this.eventsUrl + '/' + putevent._id;
      return this.http.put(putUrl, putevent)
                 .toPromise()
                 .then(response => response.json() as Event)
                 .catch(this.handleError);
    }

    private handleError (error: any) {
      let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
    }
}