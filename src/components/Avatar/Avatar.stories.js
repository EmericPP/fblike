/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import {
  withKnobs, text, array,
} from '@storybook/addon-knobs';

import Avatar from './Avatar.vue';
import AvatarWithStatus from './AvatarWithStatus.vue';

storiesOf('Avatar', module)
  .addDecorator(withKnobs)
  .add('simple', () => ({
    components: { Avatar },
    props: {
      src: {
        type: String,
        default: text('urlImage', 'https://s2.qwant.com/thumbr/0x380/7/d/10600c900156db4fe6d8f96dff57074878bf4442780f93a5af52f666921441/462demt7.jpg?u=http%3A%2F%2Fmamiejosiane.m.a.pic.centerblog.net%2F462demt7.jpg&q=0&b=1&p=0&a=1'),
      },
      classModifiers: {
        type: String,
        default: array('classModifiers', ['l']),
      },
      alt: {
        type: String,
        default: text('alt', 'un émeu'),
      },
    },
    template:
      `<avatar 
        :alt="alt"
        :src="src"
        :classModifiers="classModifiers"
      />`,
    methods: { action: action('clicked') },
  }))
  .add('with status', () => ({
    components: { AvatarWithStatus },
    props: {
      src: {
        type: String,
        default: text('urlImage', 'https://s2.qwant.com/thumbr/0x380/7/d/10600c900156db4fe6d8f96dff57074878bf4442780f93a5af52f666921441/462demt7.jpg?u=http%3A%2F%2Fmamiejosiane.m.a.pic.centerblog.net%2F462demt7.jpg&q=0&b=1&p=0&a=1'),
      },
      classModifiers: {
        type: String,
        default: array('classModifiers', ['l']),
      },
      alt: {
        type: String,
        default: text('alt', 'un émeu'),
      },
    },
    template:
      `<AvatarWithStatus
          :alt="alt"
          :src="src"
          :classModifiers="classModifiers"
          :size="20"
        />`,
    methods: { action: action('clicked') },
  }));
