/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface Todo {
  title: string;
}
class Component<T> {
  constructor(public props: T) {}
}

class Page extends Component<Todo> {
  pageInfo(): void {
    console.log(this.props.title);
  }
}

export {};
