import { Component } from '@angular/core';
import { Image } from './image';

const IMAGES: Image[] = [
  {  imgid: 1, url: 'https://imgs.xkcd.com/comics/refresh_types.png', caption: 'Some XKCD comic'},
  {  imgid: 2, url: 'https://imgs.xkcd.com/comics/election_map.png', caption: 'More XKCD comic'}
]

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  images = IMAGES;
}
