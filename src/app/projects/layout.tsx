import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A selection of professional and personal work by Jacob Rees',
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
