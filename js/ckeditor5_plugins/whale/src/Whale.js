import { Plugin } from 'ckeditor5/src/core';
import { ButtonView } from 'ckeditor5/src/ui';
import icon from '../../../../icons/whale.svg';

export default class Whale extends Plugin {
  init() {
    const editor = this.editor;

    const buttonFactory = function () {
      const button = new ButtonView();

      button.set(
        {
          label: 'Whale',
          icon: icon,
          tooltip: true,
        }
      );

      // Change the model using the model writer.
      const write = writer => {
        // Insert the text at the user's current position.
        // editor.model.insertContent(writer.createText('THIS IS A TESTING WIDGET'));
        const viewFrag = editor.data.processor.toView(`
          <div>
            <h3>THIS IS A TESTING WIDGET</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ac laoreet, cras condimentum sodales congue duis volutpat diam.</p>
            <aside>Test</aside>
            <p>Lectus euismod congue imperdiet feugiat torquent vivamus mi venenatis quisque senectus ad, posuere nascetur habitant montes porttitor diam placerat dignissim maecenas hac semper, ac laoreet sollicitudin arcu cursus sociosqu vestibulum scelerisque sagittis erat. Ornare commodo ullamcorper mus sociis curae fringilla tristique primis viverra malesuada gravida, platea placerat nulla taciti posuere blandit rutrum euismod torquent per congue, suspendisse nostra iaculis leo magna lectus ridiculus dis sapien sodales.</p>
            </div>`);
        const modelFrag = editor.data.toModel(viewFrag);
        editor.model.insertContent(modelFrag);
      }

      

      const executeHandler = () => {
       editor.model.change(write);
      }
      button.on('execute', executeHandler);

      return button;
    };

    editor.ui.componentFactory.add('whale', buttonFactory);
  }
}
