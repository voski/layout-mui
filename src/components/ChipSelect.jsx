import { useState } from 'react'
import { Chip, Menu, MenuItem, Box } from '@mui/material'
import { AltRoute, ExpandMore } from '@mui/icons-material'

function ChipSelect({
  options = [],
  value,
  onChange,
  showPosition = false,
  label = 'Select',
  icon = <AltRoute />,
  size = 'medium',
  ...otherProps
}) {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleSelect = (newValue) => {
    onChange(newValue)
    handleClose()
  }

  // Find current selection
  const selectedIndex = options.findIndex(opt => opt.value === value)
  const selectedOption = options[selectedIndex]

  // Build chip label with optional position indicator
  const getChipLabel = () => {
    if (!selectedOption) {
      return label
    }

    if (showPosition) {
      return `(${selectedIndex + 1}/${options.length}) ${selectedOption.label}`
    }

    return selectedOption.label
  }

  const chipLabel = getChipLabel()

  return (
    <>
      <Chip
        icon={icon}
        label={
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <span>{chipLabel}</span>
            <ExpandMore
              fontSize="small"
              sx={{
                transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.2s'
              }}
            />
          </Box>
        }
        onClick={handleOpen}
        clickable
        color={open ? 'primary' : 'default'}
        size={size}
        sx={{
          boxShadow: open ? 2 : 0,
          transition: 'all 0.2s',
          '&:hover': {
            boxShadow: 1
          },
          ...otherProps.sx
        }}
        {...otherProps}
      />
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        sx={{
          mt: 1
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option.value}
            selected={option.value === value}
            onClick={() => handleSelect(option.value)}
          >
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

export default ChipSelect
