import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from "@angular/core";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.css"],
})
export class CockpitComponent implements AfterViewInit {
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output("bpCreated") bluePrintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  //newServerName = "";
  //newServerContent = "";
  @ViewChild("serverContentInput") serverContentInput: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {
    console.log(this.serverContentInput);
  }

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.bluePrintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }
}
