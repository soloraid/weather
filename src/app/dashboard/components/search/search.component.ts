import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent{
  @ViewChild('input') input: ElementRef;
  @Output() searchCityChange = new EventEmitter<string>();

  searchCity() {
    this.searchCityChange.emit(this.input.nativeElement.value);
    this.input.nativeElement.value = '';
  }
}
