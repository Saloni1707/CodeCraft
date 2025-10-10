'use client'
import { useState, FC, useEffect, SVGProps } from 'react'
import Link from 'next/link'
import './navbar.css'

interface NavbarProps {
  onGithubClick?: () => void
}

interface User {
  id: string
  email: string
  role: string
}

interface NavLinkItemType {
  label: string
  href: string
}

interface NavbarState {
  isOpen: boolean
}

const NAV_LINKS: NavLinkItemType[] = [
  { label: 'Pages', href: '#pages' },
  { label: 'Components', href: '#components' },
  { label: 'Support', href: '#support' },
]

interface SVGIconProps extends React.SVGProps<SVGSVGElement> {
  'aria-hidden': boolean;
  className?: string;
}

const SVGHamburger = ({ 'aria-hidden': ariaHidden, className, ...props }: React.SVGProps<SVGSVGElement> & { 'aria-hidden': boolean }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden={ariaHidden} className={className} {...props}>
    <path
      d="M3 6h18M3 12h18M3 18h18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
)

function SVGLogout({ 'aria-hidden': ariaHidden, className }: SVGProps<SVGSVGElement>) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden={ariaHidden} className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" y1="12" x2="9" y2="12" />
    </svg>
  )
}

function NavLinkItem({ href, label, onClose }: { href: string; label: string; onClose: () => void }) {
  return (
    <li role="none">
      <a role="menuitem" href={href} className="link" onClick={onClose}>
        {label}
      </a>
    </li>
  );
}

export function Navbar({ onGithubClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [showProfileMenu, setShowProfileMenu] = useState<boolean>(false)

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem('authToken')
        if (!token) {
          setLoading(false)
          return
        }

        const response = await fetch('http://localhost:4000/users/profile', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        })

        if (response.ok) {
          const data = await response.json()
          if (data.success) {
            setUser(data.user)
          }
        } else {
          localStorage.removeItem('authToken')
          setUser(null)
        }
      } catch (error) {
        console.error('Error fetching profile:', error)
        setUser(null)
      } finally {
        setLoading(false)
      }
    }

    fetchUserProfile()
  }, [])

  const handleMenuToggle = (): void => {
    setIsOpen((prev) => !prev)
  }

  const handleLinkClose = (): void => {
    setIsOpen(false)
  }

  const handleLogout = (): void => {
    localStorage.removeItem('authToken')
    setUser(null)
    setShowProfileMenu(false)
  }

  const handleGithubClick = (): void => {
    handleLinkClose()
    onGithubClick?.()
  }

  return (
    <header className="nav-root" role="banner">
      <nav className="nav" aria-label="Primary">
        <Link href="/" className="brand neu" aria-label="Home">
          <span className="brand-letter">CodeCrafter</span>
        </Link>

        <button
          className="menu-toggle"
          aria-expanded={isOpen}
          aria-controls="primary-nav"
          onClick={handleMenuToggle}
          type="button"
        >
          <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
          <SVGHamburger aria-hidden={true} className="" />
        </button>

        <ul
          id="primary-nav"
          className={`links ${isOpen ? 'open' : ''}`}
          role="menubar"
        >
          {NAV_LINKS.map((link) => (
            <NavLinkItem
              key={link.href}
              href={link.href}
              label={link.label}
              onClose={handleLinkClose}
            />
          ))}
        </ul>

        <div className="cta">
          {loading ? (
            <div className="btn-neu" style={{ opacity: 0.5 }}>
              <span className="btn-text">Loading...</span>
            </div>
          ) : user ? (
            <div className="profile-section">
              <button
                className="profile-button btn-neu"
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                type="button"
              >
                <span className="btn-text">{user.email}</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  style={{ transform: showProfileMenu ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 200ms ease' }}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              {showProfileMenu && (
                <div className="profile-menu">
                  <div className="profile-info">
                    <p className="profile-email">{user.email}</p>
                    <p className="profile-role">{user.role}</p>
                  </div>
                  <button
                    className="logout-button"
                    onClick={handleLogout}
                    type="button"
                  >
                    <SVGLogout aria-hidden={true} />
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link href="/signup" className="btn-neu" aria-label="Signup">
                <span className="btn-text">Signup</span>
              </Link>

              <a
                href="https://github.com/Saloni1707/CodeCraft"
                className="btn-neu"
                aria-label="Github"
                onClick={handleGithubClick}
              >
                <span className="btn-text">Github</span>
              </a>
            </>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Navbar