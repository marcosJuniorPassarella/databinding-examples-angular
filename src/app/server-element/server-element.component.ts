import { AfterViewInit, ContentChild } from "@angular/core";
import {
  AfterContentInit,
  Component,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterViewInit,
    AfterContentInit,
    OnDestroy
{
  @Input("srvElement") element!: {
    type: string;
    name: string;
    content: string;
  };
  @Input() name: string;
  @ViewChild("heading") header: ElementRef;
  @ContentChild("contentParagraph") contentChildParagraph: ElementRef;

  ngOnInit(): void {
    console.log("OnInit chamado");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes chamado");
    console.log(changes);
  }

  ngDoCheck(): void {
    console.log("do check called");
  }

  ngAfterContentInit(): void {
    console.log(this.contentChildParagraph.nativeElement.textContent);
  }

  ngAfterViewInit(): void {
    console.log("afterViewInit called");
    console.log(this.header.nativeElement.textContent);
  }

  ngOnDestroy(): void {
    console.log("OnDestroy called");
  }
}
