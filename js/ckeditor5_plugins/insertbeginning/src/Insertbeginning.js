import { Plugin } from 'ckeditor5/src/core';
import { ButtonView } from 'ckeditor5/src/ui';
import icon from '../../../../icons/insert-paragraph-before.svg';

export default class Insertbeginning extends Plugin {
  init() {
    const editor = this.editor;

    const buttonFactory = function () {
      const button = new ButtonView();

      button.set(
        {
          label: 'Insert At Beginning',
          icon: icon,
          tooltip: true,
        }
      );

      // Change the model using the model writer.
      const write = writer => {
        writer.setSelection( writer.createPositionAt( editor.model.document.getRoot(), 0 ));
        editor.model.insertContent(writer.createText('New first line'));
        editor.focus();
      }
      const executeHandler = () => {
       editor.model.change(write);
      }
      button.on('execute', executeHandler);

      return button;
    };

    editor.ui.componentFactory.add('insertbeginning', buttonFactory);
  }
}
