import { Dom } from 'dom_craft';
import { machine, machineData, setMachine } from '../../lib/_state';

const MachineItems = machineData.map((el) => {
    const Button = Dom.button;
    return Dom.li.set({
        children: [
            Button.set({
                text: el,
                on: {
                    click: function () {
                        if (machine() !== el) setMachine(el);
                    },
                },
            }),
        ],
        update: () => {
            if (machine() === el) Button.class('active');
            else Button.removeClass('active');
        },
    });
});

export default MachineItems;
