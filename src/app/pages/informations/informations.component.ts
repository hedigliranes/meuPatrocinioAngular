import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.css']
})
export class InformationsComponent implements OnInit {

  listImgs = [
    "https://wordpress-meupatrocinio.s3.amazonaws.com/wp-content/uploads/2019/09/18100643/1.jpeg",
    "https://wordpress-meupatrocinio.s3.amazonaws.com/wp-content/uploads/2019/09/18100645/2.jpeg",
    "https://wordpress-meupatrocinio.s3.amazonaws.com/wp-content/uploads/2019/09/18100646/3.jpeg",
    "https://wordpress-meupatrocinio.s3.amazonaws.com/wp-content/uploads/2019/09/18100647/4.jpeg",
    "https://wordpress-meupatrocinio.s3.amazonaws.com/wp-content/uploads/2019/09/18100648/5.jpeg",
    "https://wordpress-meupatrocinio.s3.amazonaws.com/wp-content/uploads/2019/09/18100651/6.jpeg",
    "https://wordpress-meupatrocinio.s3.amazonaws.com/wp-content/uploads/2019/09/18100655/7.jpeg",
    "https://wordpress-meupatrocinio.s3.amazonaws.com/wp-content/uploads/2019/09/18100658/8.jpeg"
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
