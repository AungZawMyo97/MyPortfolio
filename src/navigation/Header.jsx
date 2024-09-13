import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = 
[
    { name: 'jerax.frontend.dev@gmail.com', href: 'mailto:jerax.frontend.dev@gmail.com', current: true, isBtn: false },
    { name: 'Download CV', href: './assets/MyPersonalResume.pdf', current: false, isBtn: true },
];

const socialLinks =
[
    {name: 'Linkedin', href:'https://www.linkedin.com/in/aung-zaw-myo-0984a6196/'},
    {name: 'Facebook', href:'https://www.facebook.com/jeraxthefk/'},
    {name: 'X', href:'https://x.com/DevJerax'}
]

const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ')
}
  
const Header = () => 
{
    return (
        <Disclosure as="nav" className="">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-10">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                        <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                        </DisclosureButton>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="hidden sm:ml-6 sm:block">
                        <div className="flex space-x-4">
                            {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                download={item.isBtn ? 'MyPersonalResume.pdf' : undefined}
                                aria-current={item.current ? 'page' : undefined}
                                className={classNames(
                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'rounded-md px-3 py-2 text-sm font-medium',
                                item.isBtn ? 'rounded-md border-2 hover:bg-gray-light' : ''
                                )
                            }
                            >
                                {item.name}
                            </a>
                            ))}
                        </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        {
                            socialLinks.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    target='_blank'
                                    className={classNames('text-gray-300 hover:text-yellow',
                                    'rounded-md px-3 py-2 text-sm font-medium')}
                                >
                                    {item.name}
                                </a>
                            ))
                        }
                    </div>
                </div>
            </div>

            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                    <DisclosureButton
                        key={item.name}
                        href={item.href}
                        download={item.isBtn ? 'MyPersonalResume.pdf' : undefined}
                        aria-current={item.current ? 'page' : undefined}
                        className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium',
                        item.isBtn ? 'rounded-md border-2 hover:bg-gray-light' : ''
                    )}
                    >
                    {item.name}
                    </DisclosureButton>
                ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}

export default Header
