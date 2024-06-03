import { Plugin } from 'ckeditor5/src/core';
import { ButtonView } from 'ckeditor5/src/ui';
import icon from '../../../../icons/insert-paragraph-after.svg';

export default class Insertatend extends Plugin {
  init() {
    const editor = this.editor;

    const buttonFactory = function () {
      const button = new ButtonView();

      button.set(
        {
          label: 'Insert At End',
          icon: icon,
          tooltip: true,
        }
      );

      // Change the model using the model writer.
      const write = writer => {
        writer.setSelection( writer.createPositionAt( editor.model.document.getRoot(), 'end' ));
        editor.model.insertContent(writer.createText('New last line'));
        editor.focus();
      }

      const executeHandler = () => {
       editor.model.change(write);
      }
      button.on('execute', executeHandler);

      return button;
    };

    editor.ui.componentFactory.add('insertatend', buttonFactory);
  }
}
