import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
  name: 'titleize'
})
@Injectable()
export class TitleizePipe implements PipeTransform {
  static skipWords = ['of', 'the', 'in', 'a'];

  transform(value: string, args?: string[] | boolean) {
    console.log('titleize', value);

    if (typeof value !== 'string') {
      return value;
    }

    // const skipWords = ['of', 'the', 'in', 'a'];
    // const skipWords = TitleizePipe.skipWords;
    const skipWords = Array.isArray(args) ? args : TitleizePipe.skipWords;
    const processSkipWords = args !== false;

    return value.replace(/\w[^-\s]*/g, (word, index: number) => {
      console.log('word', word, index);
      // if (word in skipWords) {
      // if (skipWords.indexOf(word.toLowerCase()) !== -1) {
      if (
        processSkipWords &&
        index &&
        skipWords.includes(word.toLocaleLowerCase())
      ) {
        // console.log('skipWords', word);
        return word.toLowerCase();
      }

      return word[0].toUpperCase() + word.substr(1).toLowerCase();
      // word.charAt(0)
    });
  }
}
