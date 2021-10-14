import React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
import { useTheme } from '../../hooks/useTheme'

interface MessagesProps {
  props?: SvgProps
}

const Messages: React.FC<MessagesProps> = ({ props }) => {
  const { theme } = useTheme()

  return (
    <Svg
      viewBox="0 0 821 604"
      fill="none"
      // xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M594.63 228.052c17.371 0 31.453-14.082 31.453-31.453s-14.082-31.453-31.453-31.453-31.453 14.082-31.453 31.453 14.082 31.453 31.453 31.453z"
        fill={theme.variant}
      />
      <Path
        d="M587.17 589.206l-13.771-.002-6.552-53.119 20.327.001-.004 53.12z"
        fill="#A0616A"
      />
      <Path
        d="M590.682 602.555l-44.405-.002v-.562a17.278 17.278 0 015.062-12.221 17.294 17.294 0 0112.222-5.062h.001l27.121.001-.001 17.846z"
        fill={theme.variant}
      />
      <Path
        d="M679.926 577.469l-13.127 4.163-22.304-48.654 19.375-6.144 16.056 50.635z"
        fill="#A0616A"
      />
      <Path
        d="M687.309 589.132l-42.328 13.423-.17-.536a17.284 17.284 0 0111.251-21.7h.001l25.853-8.198 5.393 17.011zM586.021 575.158h-11.78a5.049 5.049 0 01-4.976-4.166l-28.083-191.877 83.637 2.846 53.787 176.203a5.057 5.057 0 01-4.211 6.357l-15.182 5.752a5.022 5.022 0 01-5.215-2.979l-65.777-149.025a1.681 1.681 0 00-1.921-.961 1.688 1.688 0 00-1.304 1.708l6.076 150.883a5.054 5.054 0 01-5.051 5.259z"
        fill={theme.variant}
      />
      <Path
        d="M595.188 232.353c15.237 0 27.589-12.353 27.589-27.59 0-15.238-12.352-27.59-27.589-27.59-15.238 0-27.59 12.352-27.59 27.59 0 15.237 12.352 27.59 27.59 27.59z"
        fill="#A0616A"
      />
      <Path
        d="M591.493 401.114c-14.271.001-31.427-3.604-49.837-15.115a5.07 5.07 0 01-2.159-5.792l18.064-58.441-.225-47.555a36.195 36.195 0 0128.024-31.991c.327-.076.657-.149.991-.221a35.306 35.306 0 0131.759 8.728 36.439 36.439 0 0111.405 31.566l-4.551 69.855 6.174 34.991a5.02 5.02 0 01-2.642 5.362 82.408 82.408 0 01-37.003 8.613z"
        fill={theme.accent}
      />
      <Path
        d="M571.172 345.21a11.688 11.688 0 00-1.752-.63l-17.678-52.83 8.951-10.151-13.553-15.511-17.593 16.43a8.985 8.985 0 00-1.888 10.618l28.568 56.576a11.789 11.789 0 006.403 17.435 11.795 11.795 0 0012.835-3.867 11.793 11.793 0 00.925-13.373 11.794 11.794 0 00-5.218-4.697z"
        fill="#A0616A"
      />
      <Path
        d="M550.772 289.907L534.067 270.6a5.051 5.051 0 011.111-7.573l21.48-13.654a14.04 14.04 0 0123.127 11.701 14.037 14.037 0 01-4.818 9.585l-16.541 19.237a5.058 5.058 0 01-7.654.011z"
        fill={theme.accent}
      />
      <Path
        d="M562.033 178.393a18.212 18.212 0 00-5.621 4.854c-1.335 2.049-1.607 4.902.061 6.728 1.972 2.159 5.537 2.01 8.561 1.677l30.733-3.388-12.099 8.538 29.088-2.902c5.083-.508 10.941-1.47 13.418-5.63 2.906-4.881-.793-10.94-5.214-14.711a45.319 45.319 0 00-31.951-10.35 44.398 44.398 0 00-30.027 14.503l3.051.681zM592.782 325.864h-.34v-9.302a5.384 5.384 0 00-5.384-5.385h-19.71a5.384 5.384 0 00-5.384 5.385v51.035a5.381 5.381 0 005.384 5.384h19.71a5.383 5.383 0 005.384-5.384v-35.111h.339l.001-6.622z"
        fill={theme.variant}
      />
      <Path
        d="M576.658 332.521a4.494 4.494 0 10-.001-8.987 4.494 4.494 0 00.001 8.987z"
        fill={theme.background}
      />
      <Path
        d="M581.006 340.538c.618.065 1.23.179 1.83.341l41.946-36.66-2.596-13.283 19.533-6.539 6.882 23.067a8.991 8.991 0 01-3.735 10.118l-53.237 34.392a11.786 11.786 0 01-7.338 11.218 11.798 11.798 0 01-13.089-2.895 11.789 11.789 0 01-1.923-13.266 11.79 11.79 0 0111.727-6.493z"
        fill="#A0616A"
      />
      <Path
        d="M622.364 302.691a5.037 5.037 0 01-2.413-3.449l-4.556-24.958a14.037 14.037 0 018.73-17.802 14.04 14.04 0 0117.825 8.682l11.64 22.636a5.056 5.056 0 01-2.868 7.097l-24.17 8.221a5.036 5.036 0 01-4.188-.427z"
        fill={theme.accent}
      />
      <Path
        d="M419.105 229.55H224.332a17.976 17.976 0 00-17.973 17.973 17.974 17.974 0 0017.973 17.974h174.721l14.244 21.893a3.41 3.41 0 002.876 1.595c.346.001.69-.048 1.022-.146a3.423 3.423 0 002.494-3.336v-20.018a17.974 17.974 0 0017.387-18.255 17.973 17.973 0 00-17.971-17.68zm0 33.632h-1.741v22.321c.002.25-.078.494-.227.694a1.146 1.146 0 01-1.328.394 1.146 1.146 0 01-.568-.459l-14.918-22.95H224.332a15.654 15.654 0 110-31.306h194.773a15.654 15.654 0 110 31.306z"
        fill={theme.variant}
      />
      <Path
        d="M333.317 153.041H17.967A17.97 17.97 0 000 171.008a17.965 17.965 0 0017.968 17.968h2.898v21.163a3.411 3.411 0 002.482 3.336c.336.098.684.147 1.034.147a3.404 3.404 0 002.875-1.584l14.985-23.062h291.075a17.967 17.967 0 000-35.935zm0 33.621H40.985l-15.671 24.106a1.155 1.155 0 01-1.302.483 1.156 1.156 0 01-.832-1.112v-23.477h-5.212a15.652 15.652 0 01-11.07-26.722 15.652 15.652 0 0111.07-4.585h315.349a15.65 15.65 0 0115.653 15.653 15.653 15.653 0 01-15.653 15.654zM212.74 0H17.967a17.967 17.967 0 100 35.935h2.899v21.163a3.413 3.413 0 002.482 3.337c.336.1.684.153 1.034.157a3.405 3.405 0 002.875-1.595l14.985-23.062H212.74a17.969 17.969 0 0012.705-30.672A17.969 17.969 0 00212.74 0zm0 33.62H40.984L25.314 57.74a1.164 1.164 0 01-2.134-.64V33.62h-5.212a15.654 15.654 0 110-31.307H212.74a15.656 15.656 0 0115.653 15.654A15.655 15.655 0 01212.74 33.62z"
        fill={theme.secondary}
      />
      <Path
        d="M419.105 76.52h-272.45a17.969 17.969 0 000 35.936h247.883l18.759 28.858a3.407 3.407 0 002.876 1.595 3.579 3.579 0 001.022-.158 3.41 3.41 0 002.494-3.336v-26.959a17.973 17.973 0 00-.584-35.935zm0 33.621h-1.741v29.274a1.11 1.11 0 01-.82 1.112 1.13 1.13 0 01-1.303-.472l-19.445-29.914H146.655a15.656 15.656 0 01-11.069-4.584 15.657 15.657 0 010-22.138 15.655 15.655 0 0111.069-4.584h272.45a15.652 15.652 0 010 31.306z"
        fill={theme.variant}
      />
      <Path
        d="M229.551 257.381a9.276 9.276 0 10-.001-18.551 9.276 9.276 0 00.001 18.551zM257.375 257.381a9.276 9.276 0 10-.001-18.551 9.276 9.276 0 00.001 18.551zM285.2 257.381a9.275 9.275 0 009.275-9.275 9.274 9.274 0 00-9.275-9.275 9.275 9.275 0 100 18.55z"
        fill={theme.accent}
      />
      <Path
        d="M302.425 166.42H48.859a4.751 4.751 0 00-4.752 4.751v.832a4.752 4.752 0 004.752 4.751h253.566a4.763 4.763 0 004.752-4.751v-.832a4.762 4.762 0 00-4.752-4.751zM204.461 12.222H26.246a4.76 4.76 0 00-4.751 4.751v.832a4.76 4.76 0 004.751 4.751h178.215a4.762 4.762 0 004.751-4.751v-.832a4.757 4.757 0 00-4.751-4.751z"
        fill={theme.secondary}
      />
      <Path
        d="M371.993 89.9H193.778a4.762 4.762 0 00-4.751 4.75v.832a4.761 4.761 0 004.751 4.752h178.215a4.753 4.753 0 004.741-4.752v-.831a4.75 4.75 0 00-4.741-4.752z"
        fill={theme.accent}
      />
      <Path
        d="M819.311 603.222H391.327a1.124 1.124 0 110-2.246h427.984a1.12 1.12 0 011.123 1.123 1.12 1.12 0 01-1.123 1.123z"
        fill={theme.variant}
      />
    </Svg>
  )
}

export default Messages
