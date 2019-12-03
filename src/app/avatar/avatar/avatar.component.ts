import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {
  @Input() customerName: string;
  @Input() customerSurname: string;

  backgroundColourStyle;
  nameAbbreviation;

  constructor() { }

  ngOnInit() {
    // Setting avatar background colours
    this.backgroundColourStyle = this.generateAvatarBackground(this.customerName + this.customerSurname, 50, 50);
    
    this.nameAbbreviation = (this.customerName.charAt(0) + this.customerSurname.charAt(0)).toUpperCase();
  }

  // Function that returs backgound colour style with random hue
  generateAvatarBackground(string, saturation, lightness) {
    let hash = 0;
    for (var i = 0; i < string.length; i++) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
    let hue = hash % 360;
    return 'hsl('+hue+', '+saturation+'%, '+lightness+'%)';
  }
}
