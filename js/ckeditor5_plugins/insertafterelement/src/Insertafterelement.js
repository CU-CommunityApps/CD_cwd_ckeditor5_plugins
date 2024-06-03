import { Plugin } from 'ckeditor5/src/core';
import { ButtonView } from 'ckeditor5/src/ui';
import icon from '../../../../icons/wand.svg';

export default class Insertafterelement extends Plugin {
  init() {
    const editor = this.editor;

    const buttonFactory = function () {
      const button = new ButtonView();

      button.set(
        {
          label: 'Insert After Element',
          icon: icon,
          tooltip: true,
        }
      );

      const write = writer => {
        let blocks = editor.model.document.selection.getSelectedBlocks();
        blocks.forEach(element => {
          let isItRoot = element.parent;
          let elementBeforeRoot = element;
          while(isItRoot.name != "$root") {
            if(isItRoot.parent.name == "$root") {
              elementBeforeRoot = isItRoot;
              break;
            }
            isItRoot = isItRoot.parent;
          }
          writer.insertElement('paragraph',elementBeforeRoot,'end');
          writer.insertElement('paragraph',elementBeforeRoot,'after');

          // writer.insertElement('paragraph',element.parent,'end');
          // writer.insertElement('paragraph',element.parent,'after');

          return;
        });

      }
      const executeHandler = () => {
       editor.model.change(write);
      }
      button.on('execute', executeHandler);

      return button;
    };

    editor.ui.componentFactory.add('insertafterelement', buttonFactory);
  }
}
