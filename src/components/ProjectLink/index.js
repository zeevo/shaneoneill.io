/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui';
import { Popover, Transition } from '@headlessui/react';
import { useState, useEffect } from 'react';
import { usePopper } from 'react-popper';

export default function ProjectLink({ project }) {
  const { theme } = useThemeUI();
  const [referenceElement, setReferenceElement] = useState();
  const [popperElement, setPopperElement] = useState();
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'right',
  });

  // Open the menu after a delay of timeoutDuration
  const onHover = (open, action) => {
    if (action === 'onMouseEnter') {
      if (referenceElement) {
        referenceElement.click();
      }
    } else if (action === 'onMouseLeave') {
      if (referenceElement) {
        referenceElement.click();
      }
    }
  };

  return (
    <Popover className="relative ">
      {({ open }) => (
        <div
          onMouseEnter={() => onHover(open, 'onMouseEnter')}
          onMouseLeave={() => onHover(open, 'onMouseLeave')}
        >
          <Popover.Button
            ref={setReferenceElement}
            sx={{
              border: `2px solid ${theme.colors.text}`,
              paddingLeft: '1rem',
              height: '2.1875rem',
              lineHeight: '2.1875rem',
              '@media screen and (max-width: 685px)': {
                width: '100%',
              },
              width: '75%',
              display: 'inline-block',
              textDecoration: 'none',
              fontWeight: 'bold',
              color: 'text',
              backgroundColor: 'background',
              '&:hover': {
                backgroundColor: 'primary',
                color: 'muted',
                borderColor: 'text',
              },
              '&:focus-visible': {
                outline: 0,
              },
              cursor: 'pointer',
            }}
            href={project.href}
          >
            {project.label}
          </Popover.Button>

          <Transition
            show={open}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel ref={setPopperElement} style={styles.popper} {...attributes.popper}>
              <div className="m-2 p-2 border-2 border-black max-w-xs border-solid">
                <span>{project.description}</span>
              </div>
            </Popover.Panel>
          </Transition>
        </div>
      )}
    </Popover>
  );
}
