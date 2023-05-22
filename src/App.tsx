import './App.css'
import northbridgeSouthbridge from "./assets/northbridge-southbridge.svg"
import northbridgeSouthbridge2 from "./assets/northbridge-southbridge2.png"

import brain from "./assets/brain.jpg"
import chassis from "./assets/chassis.jpg"
import cpu from "./assets/cpu.jpg"
import inputDevices from "./assets/input-devices.jpg"
import longTermMemory from "./assets/long-term-memory.jpg"
import motherboard from "./assets/motherboard.jpg"
import natureNurture from "./assets/nature-nurture.jpg"
import outputDevices from "./assets/output-devices.jpg"
import powerSupply from "./assets/power-supply.jpg"
import ram from "./assets/ram.jpg"
import senses from "./assets/senses.jpg"
import shortTermMemory from "./assets/short-term-memory.jpg"
import skinNBones from "./assets/skin-n-bones.jpg"
import software from "./assets/software.jpg"
import speechMovement from "./assets/speech-movement.jpg"
import spinalCord from "./assets/spinal-cord.jpg"
import stomach from "./assets/stomach.jpg"
import storage from "./assets/storage.jpg"
import isaExpansion from "./assets/isa-expansion.jpg"
import pciExpansion from "./assets/pci-expansion.jpg"
import pcixExpansion from "./assets/pcix-expansion.jpg"
import pcieExpansion from "./assets/pcie-expansion.jpg"
import minipciExpansion from "./assets/minipci-expansion.jpg"
import agpExpansion from "./assets/agp-expansion.jpg"
import pataConnector from "./assets/pataconnector.jpg"
import sataConnector from "./assets/sataConnector.jpg"
import ps2Ports from "./assets/ps2Ports.jpg"
import rj45Port from "./assets/rj45Port.jpg"
import serialPort from "./assets/serialPort.jpg"
import db25Port from "./assets/db25Port.jpg"
import svgaPort from "./assets/svgaPort.jpg"
import eighthConnector from "./assets/eighthConnector.jpg"




function App() {

  return (
    <div className='flex'>
      {/* nav */}
      <div className='nav-side fixed text-left mb-4 min-w-[20em]'>

        <div className="absolute inset-0 p-4 w-full h-screen overflow-y-scroll inline-block">

          {/* mod 1 */}
          <a href="#module-1" className='text-xl font-bold hover:underline cursor-pointer text-black hover:font-black hover:text-black dark:hover:text-white dark:text-white '>A+ Introduction</a>
          <div className="flex">
            <div className="ml-5 w-1 bg-red-100 rounded-full"></div>
            <ul className='ml-2'>
              <li>
                <a href="#what-is-a-computer" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>What is a computer?</a>
              </li>
              <li>
                <a href="#computer-to-body-parts" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Computer to body parts</a>
              </li>
            </ul>
          </div>

          {/* mod 2 */}
          <a href="#module-2" className='text-xl font-bold hover:underline cursor-pointer text-black hover:font-black hover:text-black dark:hover:text-white dark:text-white '>Motherboards</a>
          <div className="flex">
            <div className="ml-5 w-1 bg-red-100 rounded-full"></div>
            <ul className='ml-2'>
              <li>
                <a href="#chipset-busses" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Chipsets and Buses</a>
              </li>
              <li>
                <a href="#expansion-busses-and-storage" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Expansion Buses and Storage Technology</a>
              </li>
              <li>
                <a href="#io-port-and-front-panel-connectors" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Input/Output Ports and Front Panel Connectors</a>
              </li>
              <li>
                <a href="#adapters-and-converters" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Adapters and Converters</a>
              </li>
              <li>
                <a href="#form-factors" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Form Factors</a>
              </li>
              <li>
                <a href="#bios" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>BIOS</a>
              </li>
            </ul>
          </div>

          {/* mod 3 */}
          <a href="#module-3" className='text-xl font-bold hover:underline cursor-pointer text-black hover:font-black hover:text-black dark:hover:text-white dark:text-white '>CPU</a>
          <div className="flex">
            <div className="ml-5 w-1 bg-red-100 rounded-full"></div>
            <ul className='ml-2'>
              <li>
                <a href="#technology-and-characteristics" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Technology and Characteristics</a>
              </li>
              <li>
                <a href="#socket-types" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Socket Types</a>
              </li>
              <li>
                <a href="#cooling" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Cooling</a>
              </li>
            </ul>
          </div>

          {/* mod 4 */}
          <a href="#module-4" className='text-xl font-bold hover:underline cursor-pointer text-black hover:font-black hover:text-black dark:hover:text-white dark:text-white '>RAM</a>
          <div className="flex">
            <div className="ml-5 w-1 bg-red-100 rounded-full"></div>
            <ul className='ml-2'>
              <li>
                <a href="#memory-basics" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Memory Basics</a>
              </li>
              <li>
                <a href="#types-of-dram" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Types of DRAM</a>
              </li>
              <li>
                <a href="#ram-technology" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>RAM Technology</a>
              </li>
              <li>
                <a href="#installing-and-configuring-pc-expansion-cards" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Installing and configuring PC expansion cards</a>
              </li>
            </ul>
          </div>

          {/* mod 5 */}
          <a href="#module-5" className='text-xl font-bold hover:underline cursor-pointer text-black hover:font-black hover:text-black dark:hover:text-white dark:text-white '>Storage</a>
          <div className="flex">
            <div className="ml-5 w-1 bg-red-100 rounded-full"></div>
            <ul className='ml-2'>
              <li>
                <a href="#storage-overview" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Storage Overview</a>
              </li>
              <li>
                <a href="#magnetic-storage" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Magnetic Storage</a>
              </li>
              <li>
                <a href="#optical-media" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Optical Media</a>
              </li>
              <li>
                <a href="#solid-state-media" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Solid State Media</a>
              </li>
              <li>
                <a href="#connecting-devices" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Connecting Devices</a>
              </li>
            </ul>
          </div>

          {/* mod 6 */}
          <a href="#module-6" className='text-xl font-bold hover:underline cursor-pointer text-black hover:font-black hover:text-black dark:hover:text-white dark:text-white '>Power</a>
          <div className="flex">
            <div className="ml-5 w-1 bg-red-100 rounded-full"></div>
            <ul className='ml-2'>
              <li>
                <a href="#power-basics" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Power Basics</a>
              </li>
              <li>
                <a href="#protection-and-tools" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Protection and Tools</a>
              </li>
              <li>
                <a href="#power-supplies-and-connectors" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Power Supplies and Connectors</a>
              </li>
            </ul>
          </div>

          {/* mod 7 */}
          <a href="#module-7" className='text-xl font-bold hover:underline cursor-pointer text-black hover:font-black hover:text-black dark:hover:text-white dark:text-white '>Chassis</a>
          <div className="flex">
            <div className="ml-5 w-1 bg-red-100 rounded-full"></div>
            <ul className='ml-2'>
              <li>
                <a href="#chassis-form-factors" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Form Factors</a>
              </li>
              <li>
                <a href="#layout" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Layout</a>
              </li>
            </ul>
          </div>

          {/* mod 8 */}
          <a href="#module-8" className='text-xl font-bold hover:underline cursor-pointer text-black hover:font-black hover:text-black dark:hover:text-white dark:text-white '>Build the Computer</a>
          <div className="flex">
            <div className="ml-5 w-1 bg-red-100 rounded-full"></div>
            <ul className='ml-2'>
              <li>
                <a href="#esd" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>ESD</a>
              </li>
              <li>
                <a href="#chassis-motherboard-cpu-ram" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Chassis, Motherboard, CPU, RAM</a>
              </li>
              <li>
                <a href="#bower-storage-and-booting" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>power, Storage, and Booting</a>
              </li>
            </ul>
          </div>

          {/* mod 9 */}
          <a href="#module-9" className='text-xl font-bold hover:underline cursor-pointer text-black hover:font-black hover:text-black dark:hover:text-white dark:text-white '>Laptop</a>
          <div className="flex">
            <div className="ml-5 w-1 bg-red-100 rounded-full"></div>
            <ul className='ml-2'>
              <li>
                <a href="#ports-keyboard-pointing-devices" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Ports, Keyboard, Pointing Devices</a>
              </li>
              <li>
                <a href="#video-and-sound" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Video and Sound</a>
              </li>
              <li>
                <a href="#storage-and-power" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Storage & Power</a>
              </li>
              <li>
                <a href="#expansion-devices-and-communications" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Expansion Devices & Communications</a>
              </li>
              <li>
                <a href="#memory-motherboard-and-cpu" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Memory, Motherboard, and CPU</a>
              </li>
            </ul>
          </div>

          {/* mod 10 */}
          <a href="#module-10" className='text-xl font-bold hover:underline cursor-pointer text-black hover:font-black hover:text-black dark:hover:text-white dark:text-white '>Windows</a>
          <div className="flex">
            <div className="ml-5 w-1 bg-red-100 rounded-full"></div>
            <ul className='ml-2'>
              <li>
                <a href="#requirements-versions-and-tools" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Requirements, Versions, and Tools</a>
              </li>
              <li>
                <a href="#installation" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Installation</a>
              </li>
              <li>
                <a href="#" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Migration and Customization</a>
              </li>
              <li>
                <a href="#" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Files</a>
              </li>
              <li>
                <a href="#" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Windows 8 and Windows 8.1 Features</a>
              </li>
              <li>
                <a href="#" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>File Systems and Disk Management</a>
              </li>
            </ul>
          </div>

          {/* mod 11 */}
          <a href="#module-11" className='text-xl font-bold hover:underline cursor-pointer text-black hover:font-black hover:text-black dark:hover:text-white dark:text-white '>Windows Configuration</a>
          <div className="flex">
            <div className="ml-5 w-1 bg-red-100 rounded-full"></div>
            <ul className='ml-2'>
              <li>
                <a href="#user-interfaces" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>User Interfaces</a>
              </li>
              <li>
                <a href="#applications" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Applications</a>
              </li>
              <li>
                <a href="#tools-and-utilities" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Tools and Utilities</a>
              </li>
              <li>
                <a href="##os-optimization-and-power-management" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>OS Optimization and Power Management</a>
              </li>
            </ul>
          </div>

          {/* mod 12 */}
          <a href="#module-12" className='text-xl font-bold hover:underline cursor-pointer text-black hover:font-black hover:text-black dark:hover:text-white dark:text-white '>Windows Maintenance</a>
          <div className="flex">
            <div className="ml-5 w-1 bg-red-100 rounded-full"></div>
            <ul className='ml-2'>
              <li>
                <a href="#updating-windows" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Updating Windows</a>
              </li>
              <li>
                <a href="#hard-disk-utilities" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Hard Disk Utilities</a>
              </li>
              <li>
                <a href="#backing-up-windows-xp-vista-7-8-1" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Backing up Windows (XP, Vista, 7, 8.1)</a>
              </li>
            </ul>
          </div>

          {/* mod 13 */}
          <a href="#module-13" className='text-xl font-bold hover:underline cursor-pointer text-black hover:font-black hover:text-black dark:hover:text-white dark:text-white '>Troubleshooting Windows</a>
          <div className="flex">
            <div className="ml-5 w-1 bg-red-100 rounded-full"></div>
            <ul className='ml-2'>
              <li>
                <a href="#boot-and-recover-tools" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Boot and Recovery Tools</a>
              </li>
              <li>
                <a href="#boot-errors" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Boot Errors</a>
              </li>
              <li>
                <a href="#troubleshooting-tools" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Troubleshooting Tools</a>
              </li>
              <li>
                <a href="#monitoring-tools" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Monitoring Performance</a>
              </li>
              <li>
                <a href="#stop-errors-the-blue-screen-of-death" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Stop Errors: The Blue Screen of Death</a>
              </li>
              <li>
                <a href="#troubleshooting-windows-command-line-tools" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Troubleshooting Windows - Command Line Tools</a>
              </li>
            </ul>
          </div>

          {/* mod 14 */}
          <a href="#module-14" className='text-xl font-bold hover:underline cursor-pointer text-black hover:font-black hover:text-black dark:hover:text-white dark:text-white '>Video</a>
          <div className="flex">
            <div className="ml-5 w-1 bg-red-100 rounded-full"></div>
            <ul className='ml-2'>
              <li>
                <a href="#video-card-overview" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Video Card Overview</a>
              </li>
              <li>
                <a href="#installing-and-troubleshooting-video-cards" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Installing and Troubleshooting Video Cards</a>
              </li>
              <li>
                <a href="#video-displays" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Video Displays</a>
              </li>
              <li>
                <a href="#video-settings" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Video Settings</a>
              </li>
            </ul>
          </div>

          {/* mod 15 */}
          <a href="#module-15" className='text-xl font-bold hover:underline cursor-pointer text-black hover:font-black hover:text-black dark:hover:text-white dark:text-white '>Audio</a>
          <div className="flex">
            <div className="ml-5 w-1 bg-red-100 rounded-full"></div>
            <ul className='ml-2'>
              <li>
                <a href="#audio-sound-card-overview" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Audio - Sound Card Overview</a>
              </li>
            </ul>
          </div>

          {/* mod 16 */}
          <a href="#module-16" className='text-xl font-bold hover:underline cursor-pointer text-black hover:font-black hover:text-black dark:hover:text-white dark:text-white '>Peripherals</a>
          <div className="flex">
            <div className="ml-5 w-1 bg-red-100 rounded-full"></div>
            <ul className='ml-2'>
              <li>
                <a href="#io-ports" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Input/Output Ports</a>
              </li>
              <li>
                <a href="#important-devices" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Important Devices</a>
              </li>
            </ul>
          </div>

          {/* mod 17*/}
          <a href="#module-17" className='text-xl font-bold hover:underline cursor-pointer text-black hover:font-black hover:text-black dark:hover:text-white dark:text-white '>Configurations</a>
          <div className="flex">
            <div className="ml-5 w-1 bg-red-100 rounded-full"></div>
            <ul className='ml-2'>
              <li>
                <a href="#custom-computing-custom-pc-configurations" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Custom Computing - Custom PC Configurations</a>
              </li>
              <li>
                <a href="#configuring-soho-multifunction-devices" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Configuring SOHO multifunction devices</a>
              </li>
            </ul>
          </div>

          {/* mod 18*/}
          <a href="#module-18" className='text-xl font-bold hover:underline cursor-pointer text-black hover:font-black hover:text-black dark:hover:text-white dark:text-white '>Printers</a>
          <div className="flex">
            <div className="ml-5 w-1 bg-red-100 rounded-full"></div>
            <ul className='ml-2'>
              <li>
                <a href="#printer-types-and-technologies" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Printer Types and Technologies</a>
              </li>
              <li>
                <a href="#virtual-print-technology" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Virtual Print Technology</a>
              </li>
              <li>
                <a href="#printer-installation-and-configuration" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Printer Installation and Configuration</a>
              </li>
              <li>
                <a href="#printer-management-pooling-and-troubleshooting" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Printer Management, Pooling, and Troubleshooting</a>
              </li>
              <li>
                <a href="#laser-printer-maintenance" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Laser Printer Maintenance</a>
              </li>
              <li>
                <a href="#thermal-printer-maintenance" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Thermal Printer Maintenance</a>
              </li>
              <li>
                <a href="#impact-printer-maintenance" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Impact Printer Maintenance</a>
              </li>
              <li>
                <a href="#inkjet-printer-maintenance" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Inkjet Printer Maintenance</a>
              </li>
            </ul>
          </div>

          {/* mod 19*/}
          <a href="#module-19" className='text-xl font-bold hover:underline cursor-pointer text-black hover:font-black hover:text-black dark:hover:text-white dark:text-white '>Networking</a>
          <div className="flex">
            <div className="ml-5 w-1 bg-red-100 rounded-full"></div>
            <ul className='ml-2'>
              <li>
                <a href="#network-types-and-topologies" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Networks Types and Topologies</a>
              </li>
              <li>
                <a href="#network-devices" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Network Devices</a>
              </li>
              <li>
                <a href="#cables-connectors-and-tools" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Cables, Connectors, and Tools</a>
              </li>
              <li>
                <a href="#ip-addressing-and-configuration" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>IP Addressing and Configuration</a>
              </li>
              <li>
                <a href="#tcpip-protocols-and-ports" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>TCP/IP Protocols and Ports</a>
              </li>
              <li>
                <a href="#internet-services" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Internet Services</a>
              </li>
              <li>
                <a href="#network-setup-and-configuration" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Network Setup and Configuration</a>
              </li>
              <li>
                <a href="#troubleshooting-networks" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Troubleshooting Networks</a>
              </li>

              <li>
                <a href="#iot" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>IoT</a>
              </li>
            </ul>
          </div>

          {/* mod 20*/}
          <a href="#module-20" className='text-xl font-bold hover:underline cursor-pointer text-black hover:font-black hover:text-black dark:hover:text-white dark:text-white '>Security</a>
          <div className="flex">
            <div className="ml-5 w-1 bg-red-100 rounded-full"></div>
            <ul className='ml-2'>
              <li>
                <a href="#malware" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Malware</a>
              </li>
              <li>
                <a href="#common-security-threats-and-vulnerabilities" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Common Security Threats and Vulnerabilities</a>
              </li>
              <li>
                <a href="#unauthorized-access" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Unauthorized Access</a>
              </li>
              <li>
                <a href="#digital-security" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Digital Security</a>
              </li>
              <li>
                <a href="#user-security" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>User Security</a>
              </li>
              <li>
                <a href="#file-security" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>File Security</a>
              </li>
              <li>
                <a href="#router-security" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Router Security</a>
              </li>
              <li>
                <a href="#wireless-security" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Wireless Security</a>
              </li>
            </ul>
          </div>

          {/* mod 21*/}
          <a href="#module-21" className='text-xl font-bold hover:underline cursor-pointer text-black hover:font-black hover:text-black dark:hover:text-white dark:text-white '>Mobile Devices</a>
          <div className="flex">
            <div className="ml-5 w-1 bg-red-100 rounded-full"></div>
            <ul className='ml-2'>
              <li>
                <a href="#mobile-hardware-and-operating-systems" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Mobile Hardware and Operating Systems</a>
              </li>
              <li>
                <a href="#mobile-hardware-and-operating-systems-1" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Mobile Hardware and Operating Systems-1</a>
              </li>
              <li>
                <a href="#various-types-of-mobile-devices" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Various Types of Mobile Devices</a>
              </li>
              <li>
                <a href="#connectivity-and-networking" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Connectivity and Networking</a>
              </li>
              <li>
                <a href="#connection-types" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Connection Types</a>
              </li>
              <li>
                <a href="#accessories" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Accessories</a>
              </li>
              <li>
                <a href="#email-and-synchronization" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Email and Synchronization</a>
              </li>
              <li>
                <a href="#network-connectivity" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Network Connectivity</a>
              </li>
              <li>
                <a href="#security" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Security</a>
              </li>
              <li>
                <a href="#security-1" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Security-1</a>
              </li>
              <li>
                <a href="#troubleshooting-mobile-os-and-application-security-issues" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Troubleshooting Mobile OS and Application Security Issues</a>
              </li>
            </ul>
          </div>

          {/* mod 22*/}
          <a href="#module-22" className='text-xl font-bold hover:underline cursor-pointer text-black hover:font-black hover:text-black dark:hover:text-white dark:text-white '>Technician Professionalism</a>
          <div className="flex">
            <div className="ml-5 w-1 bg-red-100 rounded-full"></div>
            <ul className='ml-2'>
              <li>
                <a href="#troubleshooting-process" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Troubleshooting Process</a>
              </li>
              <li>
                <a href="#physical-safety-and-environmental-controls" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Physical Safety and Environmental Controls</a>
              </li>
              <li>
                <a href="#customer-relations" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Customer Relations</a>
              </li>
            </ul>
          </div>

          {/* mod 23*/}
          <a href="#module-23" className='text-xl font-bold hover:underline cursor-pointer text-black hover:font-black hover:text-black dark:hover:text-white dark:text-white '>Tools & Best Practices</a>
          <div className="flex">
            <div className="ml-5 w-1 bg-red-100 rounded-full"></div>
            <ul className='ml-2'>
              <li>
                <a href="#mac-os-best-practices" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Mac OS Best Practices</a>
              </li>
              <li>
                <a href="#mac-os-tools" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Mac OS Tools</a>
              </li>
              <li>
                <a href="#mac-os-features" mac-os-features className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Mac OS features</a>
              </li>
              <li>
                <a href="#linux-best-practices" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Linux Best Practices</a>
              </li>
              <li>
                <a href="#linux-os-tools" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Linux OS Tools</a>
              </li>
              <li>
                <a href="#basic-linux-commands" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Basic Linux Commands</a>
              </li>
            </ul>
          </div>

          {/* mod 24*/}
          <a href="#module-24" className='text-xl font-bold hover:underline cursor-pointer text-black hover:font-black hover:text-black dark:hover:text-white dark:text-white '>Cloud & Virtualization</a>
          <div className="flex">
            <div className="ml-5 w-1 bg-red-100 rounded-full"></div>
            <ul className='ml-2'>
              <li>
                <a href="#basic-cloud-concepts" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Basic Cloud Concepts</a>
              </li>
              <li>
                <a href="#introduction-to-virtualization" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Introduction to Virtualization</a>
              </li>
              <li>
                <a href="#virtualization-components-and-software-defined-networking" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Virtualization Components and Software Defined Networking </a>
              </li>
            </ul>
          </div>

          {/* mod 25*/}
          <a href="#module-25" className='text-xl font-bold hover:underline cursor-pointer text-black hover:font-black hover:text-black dark:hover:text-white dark:text-white '>Server & Intrusion</a>
          <div className="flex">
            <div className="ml-5 w-1 bg-red-100 rounded-full"></div>
            <ul className='ml-2'>
              <li>
                <a href="#server-roles" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Server Roles</a>
              </li>
              <li>
                <a href="#ids-ipm-and-utm" className='hover:underline mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>IDS, IPS, and UTM</a>
              </li>
            </ul>
          </div>

          {/* padding */}
          <div className="h-20"></div>
        </div>
      </div>
      <div className="nav-side min-w-[20em]"></div>

      {/* main */}
      <main className="text-left">
        {/* Module 1 */}
        <div id="module-1" className='p-2'>
          <h1 className='mb-10'>A+ Introduction</h1>

          {/* What is a computer */}
          <div id="what-is-a-computer" className='text-left'>
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#what-is-a-computer" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>What is a computer?</a>
              </strong>
            </div>
            <h2 className='mt-4 mb-2'>The definition of a computer has changed several times throughout human history.</h2>
            <ul className='mb-4 flex flex-col gap-3 text-xl ml-4 list-disc list-inside'>
              <li><b className='mr-2'>1613:</b>A person who makes calculations or computations.</li>
              <li><b className='mr-2'>1869:</b>A device or machine for performing facilitating calculations.</li>
              <li><b className='mr-2'>1946</b>An electronic device (or system of devices) which is used to store, manipulate, and communicate information, perform complex calculations, or control or regulate other devices or machines and is capable of receiving information (data) and of processing it in accordance with variable procedural instructions. (programs or software)</li>
            </ul>
          </div>
          <div id="computer-to-body-parts">

            {/* Computer to body parts */}
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#computer-to-body-parts" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Computer to Body Parts</a>
              </strong>
            </div>
            {/* Chassis = Skin & Bones */}
            <div className='mt-4 p-4 m-2 mb-4 w-160 flex flex-col'>
              <h3 className='text-3xl mb-2'>Chassis = Skin & Bones</h3>
              <div className="h-40 flex">
                <img src={chassis} className='' alt="Chassis" />
                <img src={skinNBones} alt="Skin and Bones" />
              </div>
              <ul className='text-lg m-4 list-disc'>
                <li>Provides a framework where everything else fits.</li>
                <li>Protects the inside from the elements of the outside.</li>
                <li>Allows internal functions to operate optimally.</li>
              </ul>

            </div>
            {/* Motherboard = Spinal Cord */}
            <div className=' p-4 m-2 mb-4 w-160 flex flex-col '>
              <h3 className='text-3xl mb-2'>Motherboard = Spinal Cord</h3>
              <div className="h-40 flex">
                <img src={motherboard} className='' alt="Motherboard" />
                <img src={spinalCord} alt="Spinal Cord" />
              </div>
              <ul className='text-lg m-4 list-disc'>
                <li>What everything "plugs into."</li>
                <li>Allows brain to speak with different body parts.</li>
                <li>Allows different body parts to speak with the brain.</li>
              </ul>

            </div>

            {/* CPU = Brain */}
            <div className='p-4 m-2 mb-4 w-160 flex flex-col'>
              <h3 className='text-3xl mb-2'>CPU = Brain</h3>
              <div className="h-40 flex">
                <img src={cpu} className='' alt="RAM" />
                <img src={brain} alt="Brain" />
              </div>
              <ul className='text-lg m-4 list-disc'>
                <li>Processes all incoming and outgoing information.</li>
                <li>Extremely complex and fast.</li>
                <li>Without it, we are alive, but not aware.</li>
              </ul>

            </div>

            {/* RAM = Short Term Memory */}
            <div className='p-4 m-2 mb-4 w-160 flex flex-col'>
              <h3 className='text-3xl mb-2'>Ram = Short Term Memory</h3>
              <div className="h-40 flex">
                <img src={ram} className='mb-4 w-52' alt="RAM" />
                <img src={shortTermMemory} alt="Short Term Memory" />
              </div>
              <ul className='text-lg m-4 list-disc'>
                <li>Can only hold so much information at one time.</li>
                <li>Extremely complex and fast.</li>
                <li>Only "runs" while we're aware/awake.</li>
              </ul>

            </div>

            {/* Storage = Long Term Memory */}
            <div className='p-4 m-2 mb-4 w-160 flex flex-col '>
              <h3 className='text-3xl mb-2'>Storage = Long Term Memory</h3>
              <div className="h-40 flex">
                <img src={storage} className='' alt="Storage" />
                <img src={longTermMemory} alt="Long Term Memory" />
              </div>
              <ul className='text-lg m-4 list-disc'>
                <li>Holds <b>FAR</b> more information than our Short Term memory.</li>
                <li>Allows us to store information for later use.</li>
                <li>Information <b>ALWAYS</b> remains there.</li>
              </ul>

            </div>

            {/* Stomace/GITract = Power Supply */}
            <div className='p-4 m-2 mb-4 w-160 flex flex-col'>
              <h3 className='text-3xl mb-2'>Power Supply = Stomach/ GITract</h3>
              <div className="h-40 flex">
                <img src={powerSupply} className='' alt="Power Supply" />
                <img src={stomach} alt="Stomach" />
              </div>
              <ul className='text-lg m-4 list-disc'>
                <li>Provides us with fuel.</li>
                <li>"Feeds" all internal processes.</li>
                <li>Without it, we will eventually die.</li>
              </ul>

            </div>

            {/* Senses = input devices */}
            <div className='p-4 m-2 mb-4 w-160 flex flex-col'>
              <h3 className='text-3xl mb-2'>Input Devices = Senses</h3>
              <div className="h-40 flex">
                <img src={inputDevices} className='' alt="Input Devices" />
                <img src={senses} alt="Senses" />
              </div>
              <ul className='text-lg m-4 list-disc'>
                <li>How you receive information from the outside world.</li>
                <li>Different senses for different types of information.</li>
                <li>Gives our brains information to process.</li>
              </ul>

            </div>

            {/* Speech & Movement = output devices */}
            <div className='p-4 m-2 mb-4 w-160 flex flex-col'>
              <h3 className='text-3xl mb-2'>Output Devices = Speech & Movement</h3>
              <div className="h-40 flex">
                <img src={outputDevices} alt="Output Devices" />
                <img src={speechMovement} className='' alt="Speech & Movement" />
              </div>
              <ul className='text-lg m-4 list-disc'>
                <li>Lets us communicate with the world and people around us.</li>
                <li>Allows us to convert thoughts into actions.</li>
                <li>Permits others to process and comment on our ideas.</li>
              </ul>

            </div>

            {/* Nature vs Nurture = Software */}
            <div className='p-4 m-2 mb-4 w-160 flex flex-col'>
              <h3 className='text-3xl mb-2'>Software = Nature vs Nurture</h3>
              <div className="h-40 flex">
                <img src={software} alt="Software" />
                <img src={natureNurture} className='' alt="Nature vs Nurture" />
              </div>
              <ul className='text-lg m-4 list-disc'>
                <li>Provides us with context.</li>
                <li>Provides language to voice, meaning to gesture.</li>
                <li>A "guide" for dealing with the world around us.</li>
              </ul>

            </div>
          </div>

        </div>
        {/* module 2 */}
        <div id="module-2" className='p-2'>
          <h1 className=''>Motherboard</h1>
          <div id="chipset-busses">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#chipset-busses" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 '><span className='mr-2'>#</span>Chipsets & Busses</a>
              </strong>
            </div>
            <h2>Chipset:</h2>
            <p className='ml-3'>A group of integrated circuts or chips, that are designed to work together and are usually marketed as a single product</p>
            <h2>Bus:</h2>
            <p className='ml-3'>One wire or a group of wires that carry data from one place to another</p>
            <h2>Parallel VS. Serial</h2>
            <p><b className='ml-3 mr-1'>Serial-</b>Sending <b>ONE</b> bit of data at a time</p>
            <p><b className='ml-3 mr-1'>Parallel-</b>Sending <b>MULTIPLE</b> bits of data at a time</p>
            <h2>Bit vs Byte</h2>
            <ul className='list-disc list-inside ml-3'>
              <li>A bit is the smallest bit of data a computer can process and store </li>
              <li>Often referred to as a 1 or a 0 representing the states of either on or off</li>
              <li>Bit is represented by a lowercase <b>b</b> Byte is represented by an upper case <b>B</b></li>
              <li>There are 8 <b>bits</b> in one <b>Byte</b></li>
              <li>There are 1024 (2^10) bytes in a Kilobyte</li>
              <li>There are 1024 Kilobytes (2^20 bytes) in a Megabyte</li>
              <li>There are 1024 Megabytes (2^30 bytes) in a Gigabyte</li>
              <li>There are 1024 gigabytes (2^40 bytes) in a Terabyte</li>
              <li>There are 1024 Terabytes (2^50 bytes) in a Petabyte</li>
              <li>1Mbps = 125Kbps</li>
            </ul>
            <h2>Lane:</h2>
            <p>Two serial wires that enable the sending and receiving of data simutaneously</p>
            <h2>Two Main Motherboard Chipset Manufacturers</h2>
            <div className="ml-3">
              <p>Intel</p>
              <p>AMD</p>
            </div>
            <h2>Two main chips controlling comunication</h2>
            <div className="ml-3">
              <h3>Northbridge</h3>
              <ul className='list-disc list-inside'>
                <li>Responsible for high data transfer devices</li>
                <li>Also called memory Memory Controller Hub (MHC)</li>
                <li>High Speed Graphics</li>
                <li>Memory (RAM)</li>
              </ul>
              <h3>Southbridge</h3>
              <ul className='list-disc list-inside'>
                <li>Also called i/o Controller Hub (IHC)</li>
                <li>Secondary controllers (anything other than RAM and high speed graphics)</li>
                <li>Hard drives, USB, ethernet, ex..</li>
              </ul>
              <div className="flex gap-2 flex-wrap">
                <div className="">
                  <img className='h-[30em] w-[20em] northbridge-southbridge' src={northbridgeSouthbridge} alt="Northbridge-southbridge diagram" />
                </div>
                <div className="">
                  <img className='h-[30em] w-[20em] northbridge-southbridge' src={northbridgeSouthbridge2} alt="Northbridge-southbridge diagram" />
                </div>
              </div>

              <p>Northbridge and Southbridge are connected via the internal bus, or direct media interface</p>
            </div>
            <h2>Bus that connects the CPU to motherboard</h2>
            <div className="ml-3">
              <p><b>Intel:</b> Front Side Bus (FSB)</p>
              <p><b>AMD:</b> Hypertransport</p>
              <p>Both of these carry data from the CPU to the Northbridge, then by design goes to the south bridge/ rest of the motherboard </p>
            </div>
            <h2>Memory Bus</h2>
            <div className="ml-3">

              <p>Memory Bus goes straight from ram to north bridge</p>
            </div>
            <h2>Expansion Bus</h2>
            <div className="ml-3">
              <p> Expansion bus is any other bus that lets you expand the motherboard</p>
            </div>


          </div>

          <div id="expansion-busses-and-storage">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#expansion-busses-and-storage" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Expansion Busses & Storage Technology</a>
              </strong>
            </div>
            <h2>Expansion Busses</h2>
            <ul className='ml-3 list-disc list-inside'>
              <li>ISA</li>
              <li>PCI</li>
              <li>PCIx</li>
              <li>PVIe</li>
              <li>mini-PCI</li>
              <li>AGP</li>
              <li>AMR & CNR</li>
              <li>PCMCIA</li>
            </ul>
            <h2>Storage Technology</h2>
            <ul className='ml-3 list-disc list-inside'>
              <li>PATA / IDE</li>
              <li>SATA</li>
            </ul>
            <h2>ISA Expansion</h2>
            <div className="ml-3">
              <p>Industry Standart Architecture</p>
              <img src={isaExpansion} alt="ISA Expansion" />
              <ul className="list-disc list-inside">
                <li>Connects 16 bits</li>
                <li>Expansion for up to 32 bits</li>
                <li>Not used anymore</li>
              </ul>
            </div>
            <h2>PCI</h2>
            <div className="ml-3">
              <p>Peripheral Component Interconnect</p>
              <img src={pciExpansion} alt="PCI Expansion" />
              <ul className="list-disc list-inside">
                <li>New Standard</li>
                <li>Supports same functions as CPU/ Processor Bus</li>
                <li>Has own assigned address space</li>
                <li>Allows CPU and PCI bus to do their own things</li>
              </ul>
            </div>
            <h2>PCIx</h2>
            <div className="ml-3">
              <p>Peripheral Component Interconnect Extended</p>
              <img src={pcixExpansion} alt="pcix expansin" className='max-w-[24em]' />
              <ul className="list-disc list-inside">
                <li>Extended to allow for 32 bit expansion bus</li>
              </ul>
              <h2>PCIe</h2>
              <p>Peripheral Component Interconnect Express</p>
              <img src={pcieExpansion} alt="PCIe Expansion" />
              <ul className="list-disc list-inside">
                <li>Allows you to get really high end components</li>
                <li>Basically replaced all other expansion busses</li>
              </ul>
            </div>
            <h2>Mini-PCI</h2>
            <div className="ml-3">
              <p>Mini Peripheral Component Interconnect </p>
              <img src={minipciExpansion} alt="MiniPCI Expansion" className='max-w-[20em]' />
              <ul className="list-disc list-inside">
                <li>Created to be smaller to fit on laptop motherboards</li>
              </ul>
            </div>
            <h2>AGP</h2>
            <div className="ml-3">
              <p>Accelerated Graphics Port</p>
              <img src={agpExpansion} alt="MiniPCI Expansion" />
              <ul className='list-disc list-inside'>
                <li>Created for laptops</li>
                <li>Same archetecture smaller</li>
              </ul>
            </div>
            <h2>AMR & CMR</h2>
            <p>Audio Modem Riser</p>
            <ul className="ml-3 list-disc list-inside">
              <li>Created for Audio and Modems</li>
              <li>Mostly replaced with PCIe</li>
            </ul>
            <h2>PCMCIA</h2>
            <p>Personal Computer Memory Card International Association</p>
            <ul className='ml-3 list-disc list-inside'>
              <li>Slide into slot in laptop to expand</li>
              <li>Expansion port specifically for laptops</li>
            </ul>
            <table>
              <tr>
                <th>Expansion Bus</th>
                <th>Bus Width</th>
                <th>Frequency</th>
                <th>Max Data Rate</th>
              </tr>
              <tr>
                <td>PCI</td>
                <td>32-bit</td>
                <td>
                  33 MHz
                  <br />
                  66 MHz
                </td>
                <td>
                  133 MB/S
                  <br />
                  266MB/s
                </td>
              </tr>
              <tr>
                <td>AGP</td>
                <td>32-bit</td>
                <td>
                  1x = 66MHz
                  <br />
                  2x = 66MHz (double pumped to to 133MHz)
                  <br />
                  4x = 66MHz (quad pumped to 266 MHz)
                  <br />
                  8x = 66MHz(octo-pumped to 533MHz)
                  <br />
                </td>
                <td>
                  266 MB/s
                  <br />
                  533 MB/s
                  <br />
                  1 GB/s
                  <br />
                  2GB/s
                </td>
              </tr>
              <tr>
                <td>PCIe</td>
                <td>Serial 1-16 full duplex lanes</td>
                <td>
                  Version 1 = 2.5 GHz
                  <br />
                  Version 2 = 5 GHz
                  <br />
                  Version 3 = 8 GHz
                </td>
                <td>
                  250 MB/s per lane
                  <br />
                  500 MB/s per lane
                  <br />
                  1GB/s per lane
                </td>
              </tr>
            </table>

            <h2>PATA / IDE</h2>
            <div className="ml-3">
              <p>Parallel AT Attachment</p>

              <img src={pataConnector} alt="Pata connector" />
              <ul className='list-disc list-inside'>
                <li>40 Pin Connector</li>
                <li>Power in Molex Connectorr</li>
                <li>Keyed</li>
                <li>Connects to motherboard and up to 2 devices</li>
              </ul>
            </div>

            <h2>SATA</h2>
            <div className="ml-3">
              <p>Serial AT Attachment</p>

              <img src={sataConnector} alt="Pata connector" className='max-w-[25em]' />
              <ul className='list-disc list-inside'>
                <li>Faster and newer than Pata</li>
                <li>Instead of data being parallel it is serial</li>
                <li>Smaller than Pata</li>
              </ul>
            </div>

          </div>


          <div id="io-port-and-front-panel-connectors">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#io-port-and-front-panel-connectors" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Input/Output Ports & Front Panel Connectors</a>
              </strong>
            </div>
            <h2>Older Ports</h2>
            <ul className='ml-3 list-disc list-inside'>
              <li>PS/2</li>
              <li>Serial</li>
              <li>RJ11</li>
              <li>RJ45</li>
              <li>Audio (1/8") Cluster</li>
              <li>SVGA</li>
            </ul>
            <h2>Newer Ports</h2>
            <ul className='ml-3 list-disc list-inside'>
              <li>USB</li>
              <li>DVI</li>
              <li>HDMI Connector</li>
              <li>IEEE 1394a (Firewire)</li>
              <li>Optical Audio</li>
              <li>eSATA</li>
              <li>DisplayPort</li>
              <li>SD/Multimedia Cards</li>
            </ul>
            <h2>PS 2 ports</h2>
            <div className="ml-3">
              <p>Responsible for keyboard and mouse</p>
              <img src={ps2Ports} alt="ps2 ports" />

              <ul className='list-disc list-inside'>
                <li>Green is mouse</li>
                <li>Purple is keyboard</li>
                <li>Not Hot-swapable</li>
                <li>Must restart computer with mouse plugged in if you pull it out</li>
              </ul>
            </div>
            <h2>RJ45</h2>
            <div className="ml-3">
              <p>Registered Jack</p>
              <img src={rj45Port} alt="RJ-45 Port" />
              <ul className='list-disc list-inside'>
                <li>Used for ethernet</li>
                <li>Usually connects to cat 5 or 6 cable</li>
                <li>Looks similar to RJ11 phone/modem cable</li>
              </ul>
            </div>
            <h2>Serial Ports</h2>
            <div className="ml-3">

              <p>9 pin/ 15 pin</p>
              <img src={serialPort} alt="" />
              <ul className='list-disc list-inside'>
                <li>Mostly used to connect external devices</li>
                <li>Can connect external devices</li>
                <li>Can connect modems</li>
                <li>Also known as gaming ports</li>
                <li>Can connect old joysticks to them</li>
              </ul>
            </div>
            <h2>DB25</h2>
            <div className="ml-3">
              <p>Also known as LPT port</p>
              <img src={db25Port} alt="db25 port" />
              <ul className='list-disc list-inside'>
                <li>Parallel port</li>
                <li>Usually used for printers</li>
              </ul>
            </div>
            <h2>Male vs Female Ports</h2>
            <p className='ml-3'>Male ports have pins female ports have holes</p>
            <h2>SVGA</h2>
            <div className="ml-3">
              <img src={svgaPort} alt="SVGA port" />
              <ul>
                <li>Mainly used for graphics</li>
                <li>15 pin DB connector with 3 rows</li>
              </ul>
            </div>
            <h2>1/8" Jack Connectors</h2>
            <img src={eighthConnector} alt="1/8 Connector" />
            <ul className='list-disc list-inside'>
              <li>Used for audio</li>
              <li>Up to three for line in, speaker, and mic</li>
            </ul>























          </div>

          <div id="adapters-and-converters">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#adapters-and-converters" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Adapters and Converters</a>
              </strong>
            </div>
          </div>

          <div id="form-factors">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#form-factors" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Form Factors</a>
              </strong>
            </div>
          </div>

          <div id="bios">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#bios" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>BIOS</a>
              </strong>
            </div>
          </div>

        </div>
        {/* module 3 */}
        <div id="module-3" className='p-2'>
          <h1 className='mb-10'>CPU</h1>

          <div id="technology-and-characteristics">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#technology-and-characteristics" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Technology and Characteristics</a>
              </strong>
            </div>
          </div>

          <div id="socket-types">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#socket-types" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Socket Types</a>
              </strong>
            </div>
          </div>

          <div id="cooling">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#cooling" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Cooling</a>
              </strong>
            </div>
          </div>

        </div>
        {/* module 4 */}
        <div id="module-4" className='p-2'>
          <h1 className='mb-10'>RAM</h1>

          <div id="memory-basics">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#memory-basics" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Memory Basics</a>
              </strong>
            </div>
          </div>

          <div id="types-of-dram">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#types-of-dram" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Types of DRAM</a>
              </strong>
            </div>
          </div>
          <div id="ram-technology">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#ram-technology" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>RAM Technology</a>
              </strong>
            </div>
          </div>

          <div id="installing-and-configuring-pc-expansion-cards">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#installing-and-configuring-pc-expansion-cards" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Installing and configuring PC expansion cards</a>
              </strong>
            </div>
          </div>

        </div>
        {/* module 5 */}
        <div id="module-5" className='p-2'>
          <h1 className='mb-10'>Storage</h1>
          <div id="storage-overview">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#storage-overview" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Storage Overview</a>
              </strong>
            </div>
          </div>

          <div id="magnetic-storage">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#magnetic-storage" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Magnetic Storage</a>
              </strong>
            </div>
          </div>

          <div id="optical-media">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#optical-media" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Optical Media</a>
              </strong>
            </div>
          </div>

          <div id="solid-state-media">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#solid-state-media" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Solid State Media</a>
              </strong>
            </div>
          </div>

          <div id="connecting-devices">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#connecting-devices" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Connecting Devices</a>
              </strong>
            </div>
          </div>
        </div>
        {/* module 6 */}
        <div id="module-6" className='p-2'>
          <h1 className='mb-10'>Power</h1>
          <div id="power-basics">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#power-basics" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Power Basics</a>
              </strong>
            </div>
          </div>
          <div id="protection-and-tools">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#protection-and-tools" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Protection and Tools</a>
              </strong>
            </div>
          </div>
          <div id="power-supplies-and-connectors">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#power-supplies-and-connectors" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Power Supplies and Connectors</a>
              </strong>
            </div>
          </div>

        </div>
        {/* module 7 */}
        <div id="module-7" className='p-2'>
          <h1 className='mb-10'>Chassis</h1>
          <div id="chassis-form-factors">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#chassis-form-factors" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Form Factors</a>
              </strong>
            </div>
          </div>
          <div id="layout">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#layout" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Layout</a>
              </strong>
            </div>
          </div>

        </div>
        {/* module 8 */}
        <div id="module-8" className='p-2'>
          <h1 className='mb-10'>Build the Computer</h1>
          <div id="esd">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#esd" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>ESD</a>
              </strong>
            </div>
          </div>
          <div id="chassis-motherboard-cpu-ram">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#chassis-motherboard-cpu-ram" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Chassis Motherboard CPU RAM</a>
              </strong>
            </div>
          </div>
          <div id="bower-storage-and-booting">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#bower-storage-and-booting" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Bower Storage and Booting</a>
              </strong>
            </div>
          </div>

        </div>
        {/* module 9 */}
        <div id="module-9" className='p-2'>
          <h1 className='mb-10'>Laptop</h1>
          <div id="ports-keyboard-pointing-devices">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#ports-keyboard-pointing-devices" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Ports Keyboard Pointing Devices</a>
              </strong>
            </div>
          </div>
          <div id="video-and-sound">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#video-and-sound" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Video and Sound</a>
              </strong>
            </div>
          </div>
          <div id="storage-and-power">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#storage-and-power" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Storage and Power</a>
              </strong>
            </div>
          </div>
          <div id="expansion-devices-and-communications">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#expansion-devices-and-communications" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Expansion Devices & Communications</a>
              </strong>
            </div>
          </div>
          <div id="memory-motherboard-and-cpu">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#memory-motherboard-and-cpu" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Memory Motherboard and CPU </a>
              </strong>
            </div>
          </div>

        </div>
        {/* module 10 */}
        <div id="module-10" className='p-2'>
          <h1 className='mb-10'>Windows</h1>
          <div id="requirements-versions-and-tools">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#requirements-versions-and-tools" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Requirements Versions and Tools</a>
              </strong>
            </div>
          </div>
          <div id="installation">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#installation" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Installation</a>
              </strong>
            </div>
          </div>
          <div id="migration-and-customization">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#migration-and-customization" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Migration and Customization</a>
              </strong>
            </div>
          </div>
          <div id="files">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#files" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Files</a>
              </strong>
            </div>
          </div>
          <div id="windows-8-and-windows-8-1">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#windows-8-and-windows-8-1" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Windows 8 and Windows 8.1 Features</a>
              </strong>
            </div>
          </div>
          <div id="file-systems-and-disk-management">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#file-systems-and-disk-management" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>File Systems and Disk Management</a>
              </strong>
            </div>
          </div>

        </div>
        {/* module 11 */}
        <div id="module-11" className='p-2'>
          <h1 className='mb-10'>Windows Configuration</h1>
          <div id="user-interfaces">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#user-interfaces" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>User Interfaces</a>
              </strong>
            </div>
          </div>
          <div id="applications">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#applications" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Applicatioins</a>
              </strong>
            </div>
          </div>
          <div id="tools-and-utilities">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#tools-and-utilities" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Tools & Utilities</a>
              </strong>
              /</div>
          </div>
          <div id="os-optimization-and-power-management">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#os-optimization-and-power-management" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>OS Optimization and Power Management</a>
              </strong>
            </div>
          </div>

        </div>
        {/* module 12 */}
        <div id="module-12" className='p-2'>
          <h1 className='mb-10'>Windows Maintenance</h1>
          <div id="updating-windows">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#updating-windows" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Updating Windows</a>
              </strong>
            </div>
          </div>
          <div id="hard-disk-utilities">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#hard-disk-utilities" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Hard Disk Utilities</a>
              </strong>
            </div>
          </div>
          <div id="backing-up-windows-xp-vista-7-8-1">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#backing-up-windows-xp-vista-7-8-1" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Backing up Windows (XP, Vista, 7, 8.1)</a>
              </strong>
            </div>
          </div>

        </div>
        {/* module 13 */}
        <div id="module-13" className='p-2'>
          <h1 className='mb-10'>Troubleshooting Windows</h1>
          <div id="boot-and-recover-tools">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#boot-and-recover-tools" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Boot and Recovery Tools</a>
              </strong>
            </div>
          </div>
          <div id="boot-errors">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#boot-errors" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Boot Errors</a>
              </strong>
            </div>
          </div>
          <div id="troubleshooting-tools">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#troubleshooting-tools" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Troubleshooting tools</a>
              </strong>
            </div>
          </div>
          <div id="monitoring-tools">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#monitoring-tools" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Monitoring Tools</a>
              </strong>
            </div>
          </div>
          <div id="stop-errors-the-blue-screen-of-death">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#stop-errors-the-blue-screen-of-death" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Stop Errors: The Blue Screen of Death</a>
              </strong>
            </div>
          </div>
          <div id="troubleshooting-windows-command-line-tools">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#troubleshooting-windows-command-line-tools" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Troubleshooting Windows- Command Line Tools</a>
              </strong>
            </div>
          </div>

        </div>
        {/* module 14 */}
        <div id="module-14" className='p-2'>
          <h1 className='mb-10'>Video</h1>
          <div id="video-card-overview">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#video-card-overview" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Video Card Overview</a>
              </strong>
            </div>
          </div>
          <div id="installing-and-troubleshooting-video-cards">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#installing-and-troubleshooting-video-cards" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Installing and Troubleshooting Video Cards</a>
              </strong>
            </div>
          </div>
          <div id="video-displays">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#video-displays" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Video Displays</a>
              </strong>
            </div>
          </div>
          <div id="video-settings">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#video-settings" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Video Settings</a>
              </strong>
            </div>
          </div>

        </div>
        {/* module 15 */}
        <div id="module-15" className='p-2'>
          <h1 className='mb-10'>Audio</h1>
          <div id="audio-sound-card-overview">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#audio-sound-card-overview" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Audio Sound Card Overview</a>
              </strong>
            </div>
          </div>

        </div>
        {/* module 16 */}
        <div id="module-16" className='p-2'>
          <h1 className='mb-10'>Peripherals</h1>
          <div id="io-ports">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#io-ports" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Input/Outport Ports</a>
              </strong>
            </div>
          </div>
          <div id="important-devices">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#important-devices" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Important Devices</a>
              </strong>
            </div>
          </div>

        </div>
        {/* module 17 */}
        <div id="module-17" className='p-2'>
          <h1 className='mb-10'>Configurations</h1>
          <div id="custom-computing-custom-pc-configurations">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#custom-computing-custom-pc-configurations" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Custom Computing Custom PC Configurations</a>
              </strong>
            </div>
          </div>
          <div id="configuring-soho-multifunction-devices">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#configuring-soho-multifunction-devices" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Configuring SOHO Multifunction Devices</a>
              </strong>
            </div>
          </div>

        </div>
        {/* module 18 */}
        <div id="module-18" className='p-2'>
          <h1 className='mb-10'>Printers</h1>
          <div id="printer-types-and-technologies">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#printer-types-and-technologies" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Printer Types and Technologies</a>
              </strong>
            </div>
          </div>
          <div id="virtual-print-technology">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#virtual-print-technology" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Virtual Print Technology</a>
              </strong>
            </div>
          </div>
          <div id="printer-installation-and-configuration">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#printer-installation-and-configuration" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Printer Installation and Configuration</a>
              </strong>
            </div>
          </div>
          <div id="printer-management-pooling-and-troubleshooting">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#printer-management-pooling-and-troubleshooting" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Printer Management Poolig and Troubleshooting</a>
              </strong>
            </div>
          </div>
          <div id="laser-printer-maintenance">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#laser-printer-maintenance" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Laser Printing Maintenance</a>
              </strong>
            </div>
          </div>
          <div id="thermal-printer-maintenance">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#thermal-printer-maintenance" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Thermal Printer Maintenance</a>
              </strong>
            </div>
          </div>
          <div id="impact-printer-maintenance">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#impact-printer-maintenance" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Impact Printer Maintenance</a>
              </strong>
            </div>
          </div>
          <div id="inkjet-printer-maintenance">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#inkjet-printer-maintenance" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Inkjet Printer Maintenance</a>
              </strong>
            </div>
          </div>

        </div>
        {/* module 19 */}
        <div id="module-19" className='p-2'>
          <h1 className='mb-10'>Networking</h1>
          <div id="network-types-and-topologies">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#network-types-and-topologies" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Network Types and Topologies</a>
              </strong>
            </div>
          </div>
          <div id="network-devices">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#network-devices" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Network Devices</a>
              </strong>
            </div>
          </div>
          <div id="cables-connectors-and-tools">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#cables-connectors-and-tools" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Cables, Connectors, and Tools</a>
              </strong>
            </div>
          </div>
          <div id="ip-addressing-and-configuration">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#ip-addressing-and-configuration" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>IP Addressing and Configuration</a>
              </strong>
            </div>
          </div>
          <div id="tcpip-protocols-and-ports">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#tcpip-protocols-and-ports" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>TCP/IP Protocols and Ports</a>
              </strong>
            </div>
          </div>
          <div id="internet-services">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#internet-services" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Internet Services</a>
              </strong>
            </div>
          </div>
          <div id="network-setup-and-configuration">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#network-setup-and-configuration" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Network Setup and Configuration</a>
              </strong>
            </div>
          </div>
          <div id="troubleshooting-networks">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#troubleshooting-networks" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Troubleshooting Networks</a>
              </strong>
            </div>
          </div>
          <div id="iot">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#iot" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>IoT</a>
              </strong>
            </div>
          </div>

        </div>
        {/* module 20 */}
        <div id="module-20" className='p-2'>
          <h1 className='mb-10'>Security</h1>
          <div id="malware">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#malware" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Malware</a>
              </strong>
            </div>
          </div>
          <div id="common-security-threats-and-vulnerabilities">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#common-security-threats-and-vulnerabilities" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Common Security Threats and Vulnerabilities</a>
              </strong>
            </div>
          </div>
          <div id="unauthorized-access">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#unauthorized-access" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Unauthorized Access</a>
              </strong>
            </div>
          </div>
          <div id="digital-security">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#digital-security" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Digital Security</a>
              </strong>
            </div>
          </div>
          <div id="user-security">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#user-security" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>User Security</a>
              </strong>
            </div>
          </div>
          <div id="file-security">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#file-security" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>File Security</a>
              </strong>
            </div>
          </div>
          <div id="router-security">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#router-security" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Router Security</a>
              </strong>
            </div>
          </div>
          <div id="wireless-security">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#wireless-security" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Wireless Security</a>
              </strong>
            </div>
          </div>

        </div>
        {/* module 21 */}
        <div id="module-21" className='p-2'>
          <h1 className='mb-10'>Mobile Devices</h1>
          <div id="mobile-hardware-and-operating-systems">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#mobile-hardware-and-operating-systems" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Mobile Hardware and Operating Systems</a>
              </strong>
            </div>
          </div>
          <div id="mobile-hardware-and-operating-systems-1">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#mobile-hardware-and-operating-systems-1" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Mobile Hardware and Operating Systems-1</a>
              </strong>
            </div>
          </div>
          <div id="various-types-of-mobile-devices">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#various-types-of-mobile-devices" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Various Types of Mobile Devices</a>
              </strong>
            </div>
          </div>
          <div id="connectivity-and-networking">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#connectivity-and-networking" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Connectivity and Networking</a>
              </strong>
            </div>
          </div>
          <div id="connection-types">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#connection-types" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Connection Types</a>
              </strong>
            </div>
          </div>
          <div id="accessories">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#accessories" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Accessories</a>
              </strong>
            </div>
          </div>
          <div id="email-and-synchronization">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#email-and-synchronization" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Email and Synchronization</a>
              </strong>
            </div>
          </div>
          <div id="network-connectivity">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#network-connectivity" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Network Connectivity</a>
              </strong>
            </div>
          </div>
          <div id="security">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#security" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Security</a>
              </strong>
            </div>
          </div>
          <div id="security-1">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#security-1" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Security-1</a>
              </strong>
            </div>
          </div>
          <div id="troubleshooting-mobile-os-and-application-security-issues">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#troubleshooting-mobile-os-and-application-security-issues" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Troubleshooting Mobile OS and Application Security Issues</a>
              </strong>
            </div>
          </div>

        </div>
        {/* module 22 */}
        <div id="module-22" className='p-2'>
          <h1 className='mb-10'>Technician Professionalism</h1>
          <div id="troubleshooting-process">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#troubleshooting-process" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Troubleshooting Process</a>
              </strong>
            </div>
          </div>
          <div id="physical-safety-and-environmental-controls">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#physical-safety-and-environmental-controls" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Physical Safety and Environmental Controls</a>
              </strong>
            </div>
          </div>
          <div id="customer-relations">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#customer-relations" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Customer Relations</a>
              </strong>
            </div>
          </div>

        </div>
        {/* module 23 */}
        <div id="module-23" className='p-2'>
          <h1 className='mb-10'>Tools & Best Practices</h1>
          <div id="mac-os-best-practices">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#mac-os-best-practices" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Mac OS Best Practices</a>
              </strong>
            </div>
          </div>
          <div id="mac-os-tools">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#mac-os-tools" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Mac OS Tools</a>
              </strong>
            </div>
          </div>
          <div id="mac-os-features">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#mac-os-features" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Mac OS Features</a>
              </strong>
            </div>
          </div>
          <div id="linux-best-practices">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#linux-best-practices" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Linux Best Practices</a>
              </strong>
            </div>
          </div>
          <div id="linux-os-tools">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#linux-os-tools" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Linux OS Tools</a>
              </strong>
            </div>
          </div>
          <div id="basic-linux-commands">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#basic-linux-commands" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Basic Linux Commands</a>
              </strong>
            </div>
          </div>

        </div>
        {/* module 24 */}
        <div id="module-24" className='p-2'>
          <h1 className='mb-10'>Cloud & Virtuaization</h1>
          <div id="basic-cloud-concepts">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#basic-cloud-concepts" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Basic Cloud Concepts</a>
              </strong>
            </div>
          </div>
          <div id="introduction-to-virtualization">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#introduction-to-virtualization" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Introduction to Virtualization</a>
              </strong>
            </div>
          </div>
          <div id="virtualization-components-and-software-defined-networking">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#virtualization-components-and-software-defined-networking" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Virtualization Components and Software Defined Networking</a>
              </strong>
            </div>
          </div>

        </div>
        {/* module 25 */}
        <div id="module-25" className='p-2'>
          <h1 className='mb-10'>Server & Intrusion</h1>
          <div id="server-roles">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#server-roles" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>Server Roles</a>
              </strong>
            </div>
          </div>
          <div id="ids-ipm-and-utm">
            <div className="border-y p-1 my-4">
              <strong>
                <a href="#ids-ipm-and-utm" className='text-2xl mb-4 text-black dark:text-white cursor-pointer hover:text-slate-600 dark:hover:text-red-100 my- '><span className='mr-2'>#</span>IDS, IPS, and UTM</a>
              </strong>
            </div>
          </div>


        </div>
      </main >
    </div >
  )
}

export default App
