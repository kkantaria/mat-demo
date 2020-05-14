import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-header-with-tag",
  templateUrl: "./header-with-tag.component.html",
  styleUrls: ["./header-with-tag.component.scss"],
})
export class HeaderWithTagComponent implements OnInit {
  @Input("header") header: string;
  @Input("tag-line") tagLine: string;
  constructor() {}

  ngOnInit(): void {}
}
