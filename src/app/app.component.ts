import { Component } from '@angular/core';
import { Tab } from './tab.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public tabs: Tab[] = [
    {
      label: 'Lorem ipsum',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget diam maximus leo venenatis sodales non sit amet nunc. Praesent consectetur sodales eros porttitor consequat. Praesent nec nunc mollis, <strong>bibendum elit in</strong>, gravida tortor. Donec eu viverra neque. Nullam id mi tristique, faucibus ipsum vitae, interdum nunc. Aenean blandit velit non sem suscipit auctor eu vitae risus. Cras a massa consequat, ullamcorper sem a, ultrices ipsum. Sed quis tellus nisl. Vivamus non lorem a velit aliquam auctor.'
    },
    {
      label: 'Aliquam et magna',
      content:
        'Aliquam et magna ligula. Etiam a luctus est. In in dictum ligula. Sed interdum nec est id elementum. Cras ligula augue, <strong>feugiat non nisi vel</strong>, congue sollicitudin sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In vitae ornare odio. Quisque et consequat lectus. Etiam cursus nisi vel posuere sagittis. Vivamus id erat eu augue suscipit malesuada quis id sem. Duis ac aliquam orci, ac lacinia nibh. Phasellus vitae consectetur leo. Curabitur at eros pretium, mollis risus nec, rutrum ex.'
    },
    {
      label: 'Cras in efficitur',
      content:
        'Cras in efficitur est. Nam sagittis sodales nulla a rutrum. Vivamus nulla ipsum, euismod ac sem in, molestie pharetra erat. <strong>Integer aliquet justo tortor, eu lacinia magna fermentum auctor. Morbi vel nisl erat.</strong> Sed vel varius purus, sed pellentesque risus. Pellentesque vel maximus ipsum. Morbi justo eros, porttitor ac turpis non, accumsan mollis augue. Pellentesque vitae tortor ante. Sed at velit sed elit pulvinar pharetra. Curabitur dignissim condimentum sagittis. Donec ut nisi eu nisi ultricies bibendum. Fusce accumsan risus tempor elit sollicitudin gravida. Nullam aliquam, eros id imperdiet maximus, diam lectus tempor libero, et tempus enim erat nec metus.'
    }
  ];
}
