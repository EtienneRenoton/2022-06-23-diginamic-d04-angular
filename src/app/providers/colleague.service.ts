import { Observable } from 'rxjs';
import { Colleague } from 'src/app/models/colleague';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ColleagueService {


/**


colleagueList(): Colleague [] {
    return [

      {
        pseudo: 'Jean',
        score: 150,
        photo: 'https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?k=20&m=1179420343&s=612x612&w=0&h=G2UGMVSzAXGAQs3pFZpvWlHNRAzwPIWIVtSOxZHsEuc=',

      },
      {
        pseudo: 'Jeanne',
        score: 350,
        photo: 'https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&w=400',

      },
      {
        pseudo: 'Jean',
        score: 150,
        photo: 'https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?k=20&m=1179420343&s=612x612&w=0&h=G2UGMVSzAXGAQs3pFZpvWlHNRAzwPIWIVtSOxZHsEuc=',

      },
      {
        pseudo: 'Jean',
        score: -250,
        photo: 'https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?k=20&m=1179420343&s=612x612&w=0&h=G2UGMVSzAXGAQs3pFZpvWlHNRAzwPIWIVtSOxZHsEuc=',

      },
      {
        pseudo: 'Jeanne',
        score: 150,
        photo: 'https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&w=400',

      },
      {
        pseudo: 'Jean',
        score: -100,
        photo: 'https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?k=20&m=1179420343&s=612x612&w=0&h=G2UGMVSzAXGAQs3pFZpvWlHNRAzwPIWIVtSOxZHsEuc=',

      },

  ]
}
*/
listerColleague():Observable<Colleague[]>{
  return this.http.get<Colleague[]>("https://colleagues-app.herokuapp.com/api/v2/colleagues")
}

constructor(private http: HttpClient) { }

}

