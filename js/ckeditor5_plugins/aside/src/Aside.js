import { Plugin } from 'ckeditor5/src/core';
import { ButtonView } from 'ckeditor5/src/ui';
import icon from '../../../../icons/aside.svg';

export default class Aside extends Plugin {
  init() {
    const editor = this.editor;

    const buttonFactory = function () {
      const button = new ButtonView();

      button.set(
        {
          label: 'Aside',
          icon: icon,
          tooltip: true,
        }
      );

      const write = writer => {
        const viewFrag = editor.data.processor.toView("<aside>Test</aside>");
        const modelFrag = editor.data.toModel(viewFrag);
        editor.model.insertContent(modelFrag);
      }
      const executeHandler = () => {
       editor.model.change(write);
      }
      button.on('execute', executeHandler);

      return button;
    };

    editor.ui.componentFactory.add('aside', buttonFactory);
  }
}
