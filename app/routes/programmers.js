import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return ['Linus Torvald', 'Uncle Bob', 'Ada Lovelace', 'Adrian Bunea :^)']
  }
});
